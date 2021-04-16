import React, { Component } from "react";
import Joi from "joi-browser"; //npm i joi-browser
import  Google  from './Google';
// import AllUrls from '../General/Assets/JSX/AllUrls';
import { Redirect } from "react-router";
import { BrowserRouter, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import axios from "axios";
import { Switch } from 'react-router-dom';
// 95ef7af7310f576dc394e991761600ab79ea78c
// const login = AllUrls.login

class LoginForm extends Component {
  state = {
    username: "",
     password: "",
     errors: {}
   };
 
   schema = {
    username: Joi.string().required(),
     password: Joi.string().required()
   };
 
   
   handleSubmit = e => {
     console.log(this.props.history)
     e.preventDefault();
 
     const errors = this.validate();
 
     if (errors) return;
     // start fetch 
     let user = {
         username:this.state.username,
        password:this.state.password
    }
 
       fetch("https://itipythonapi.herokuapp.com/api/login",{
         method:"POST",
         headers:{
             "content-type":"application/json"
         },
         body:JSON.stringify(user)
       })  .then(res=>res.json())
           .then(res=>{
    
     if(res.error)  {  
         alert(res.error)
           this.setState({errors:res.error
            
         }); console.log(this.state.errors);}
 
     else if(res.token) 
 
       {
           //alert(res.token)
           console.log(res.token)
             localStorage.token=res.token;
             this.props.change()
             
     }})
     .catch (err=>{alert (err.error);})
    //end fetch 
     
     
   };




  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors; // not to do this to errors obj in the state itself
    const res = Joi.validate(state, this.schema, { abortEarly: false }); //false to return all errors not only the first 
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }


    this.setState({ errors });
    return errors;
  };

  handleChange = e => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value; //using name attribute to know which of them will be change 
    this.setState(state);
  };
  // admin = ()=>{
  //   let res = axios.get(AllUrls.admin, {})
  //   .then(function (response) {
  //     console.log(response.config.url);
  //     <Redirect to={response.config.url}/>
  //         })
  // }

  render() {
    return (
      <React.Fragment>
          <div className="container" style={{textAlign: "center",color:"red" ,backgroundColor:"black",fontSize:"20px",width:"40%",padding:"15px",marginTop:"30px",marginBottom:"152px"}}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
              className="form-control login_input"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
             
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
        
            <input
              className="form-control login_input "
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="text"
             
            /> </div>
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
         
          <button type="submit" className="login_btn">
          Login
            <i className="fas fa-sign-in-alt login-icon" style={{fontSize: "18px",paddingLeft:"3px"}}></i>
          </button>
          <p style={{paddingTop:"30px"}}>Don't have an account?
             Signup <Link className="signuplink" to="/signup">here</Link></p>
            <Google/>


    
        </form>
          {/* <Button className="login_btn" style={{color:"white",marginTop:"30px"}}>
          </Button> */}
            <a style={{marginTop:"30px"}} className="btn btn-danger login_btn" href="https://itipythonapi.herokuapp.com/admin/">Admins Only</a>
        </div>


       

      </React.Fragment>
    );
  }
}

export default LoginForm;