
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Joi from "joi-browser"; //npm i joi-browser
//import '../General/Assets/CSS/SignUp.css';

class SignupForm extends Component {
  state = {
    email                       : "",
    password                    : "",
    password2                   :"",
    username                    :"",
    gender                      :"",
    first_name                  :"",
    last_name                   :"",
    phone                       :"",
    country                     :"",
    //avatar                      :"",
    membership                  :"",
    birth_date                  :"",
    payment_day                 :"",
   // membership_Start_Date       :"",
    errors: {}
  };

  schema = {
    email                       :Joi.string().required(),
    password                    :Joi.string().required(),
    password2                   :Joi.string().required(),
    username                    :Joi.string().required(),
    gender                      :Joi.required(),
    first_name                  :Joi.string().required(),
    last_name                   :Joi.string().required(),
    phone                       :Joi.string().required(),
    country                     :Joi.string().required(),
   // avatar                      :Joi.required(),
    membership                  :Joi.required(),
    birth_date                  :Joi.string().required(),
    payment_day                 :Joi.required(),
   //membership_Start_Date       :Joi.string().required(),
  };

  
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
    // start fetch 
    let user = {
      email                  :this.state.email,
      password               :this.state.password,
      password2              :this.state.password2,
      username               :this.state.username,
      gender                 :this.state.gender,
      first_name             :this.state.first_name,
      last_name              :this.state.last_name,
      phone                  :this.state.phone,
     // country                :this.state.country,
    //  avatar                 :this.state.avatar,
    //  membership             :"",
      birth_date             :this.state.birth_date,
     // payment_day            :this.state.payment_day,
    //  membership_Start_Date  :this.state.membership_Start_Date,
     // username:"hassan2",
    // first_name:"ahmed",
    //  last_name:"salah",
    //  email:"ahmed_mahmoud_engineer@yahoo.com",
    //  password:"iamahmed",
    //  password2:"iamahmed",
     // phone:"01001557541",
      country:"",
      avatar:"pic",
      membership:"",
     // birth_date:"1997-5-1",
      //gender:"Male",
      payment_day:1,
      membership_Start_Date:"2020-4-15"
   }

      fetch("https://itipythonapi.herokuapp.com/api/register/",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
      })  
      .then(res=>res.json())
      .then(res=>{
   
    if(res.error)  {  
        alert(res.error)
          this.setState({errors:res.error
           
        }); console.log(this.state.errors);}

    else if(res.token) 

      {
          alert(res.token)
            localStorage.token=res.token;
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
   /* if(e.target.name === "password2") {

      if (this.state.password!==this.state.password2){
        e.target.value=""
        this.setState({password2:e.target.value})
      }

    }*/
  };

  render() {
    return (
      <React.Fragment>
          <div className="container" style={{textAlign: "center",color:"#e50914",fontSize:"25px",backgroundColor:"black",height:"auto",width:"40%",padding:"15px",marginTop:"30px",borderRadius:"20px"}}>
        
      
        <Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">user name </label>
            <input
              placeholder="ex:Ahmed"
              className="form-control signup_input"
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
          <div className="form-group">
            <label htmlFor="first_name">first name</label>
            <input
            placeholder="Ahmed"
              className="form-control signup_input"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
              autoFocus
              id="first_name"
              type="text"
             
            />
            
            {this.state.errors.first_name && (
              <div className="alert alert-danger">
                {this.state.errors.first_name}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="last_name">last name</label>
            <input
            placeholder="ex:mohmed"
              className="form-control signup_input"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
              autoFocus
              id="last_name"
              type="text"
             
            />
            
            {this.state.errors.last_name && (
              <div className="alert alert-danger">
                {this.state.errors.last_name}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="ahmed@gmail.com"
              className="form-control signup_input"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoFocus
              id="email"
              type="text"
             
            />
           
            
            {this.state.errors.email && (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            )}
          </div>

          

          <div className="form-group">
            <label htmlFor="phone">phone number</label>
            <input
            placeholder="+201126638449"
              className="form-control signup_input"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              autoFocus
              id="phone"
              type="text"
             
            />
            
            {this.state.errors.phone && (
              <div className="alert alert-danger">
                {this.state.errors.phone}
              </div>
            )}
          </div>

           <div className="form-group">
            <label htmlFor="country">country name</label>
            <input
              placeholder="ex:Egypt"
              className="form-control signup_input"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              autoFocus
              id="country"
              type="text"
             
            />
            
            {this.state.errors.country && (
              <div className="alert alert-danger">
                {this.state.errors.country}
              </div>
            )}
          </div> 

          {/* <div className="form-group">
            <label htmlFor="avatar">avatar</label>
            <input
              className="form-control signup_input"
              name="avatar"
              value={this.state.avatar}
              onChange={this.handleChange}
              autoFocus
              id="avatar"
              type="text"
             
            />
            
            {this.state.errors.avatar && (
              <div className="alert alert-danger">
                {this.state.errors.avatar}
              </div>
            )}
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="membership">membership</label>
            <input
              className="form-control signup_input"
              name="membership"
              value={this.state.membership}
              onChange={this.handleChange}
              autoFocus
              id="membership"
              type="text"
             
            />
            
            {this.state.errors.membership && (
              <div className="alert alert-danger">
                {this.state.errors.membership}
              </div>
            )}
          </div> */}
          <div className="form-group">
            <label htmlFor="birth_date">birthdate</label>
            <input
              placeholder="1998-05-05"
              className="form-control signup_input"
              name="birth_date"
              value={this.state.birth_date}
              onChange={this.handleChange}
              autoFocus
              id="birth_date"
              type="text"
             
            />
            
            {this.state.errors.birth_date && (
              <div className="alert alert-danger">
                {this.state.errors.birth_date}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="payment_day">payment day</label>
            <input
            placeholder="1-31"
              className="form-control signup_input"
              name="payment_day"
              value={this.state.payment_day}
              onChange={this.handleChange}
              autoFocus
              id="payment_day"
              type="text"
             
            />
            
            {this.state.errors.payment_day && (
              <div className="alert alert-danger">
                {this.state.errors.payment_day}
              </div>
            )}
          </div>
          {/* <div className="form-group">
            <label htmlFor="membership_Start_Date">membership Start Date</label>
            <input
              className="form-control signup_input"
              name="membership_Start_Date"
              value={this.state.membership_Start_Date}
              onChange={this.handleChange}
              autoFocus
              id="membership_Start_Date"
              type="text"
             
            />
            
            {this.state.errors.membership_Start_Date && (
              <div className="alert alert-danger">
                {this.state.errors.membership_Start_Date}
              </div>
            )}
          </div> */}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              className="form-control signup_input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="password"
             
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input 
              className="form-control signup_input"
              name="password2"
              value={this.state.password2}
              onChange={this.handleChange}
              id="password2"
              type="password"
             
            />
            {this.state.errors.password2 && (
              <div className="alert alert-danger">
                {this.state.errors.password2}
              </div>
            )}
          </div>

          {/* <div className="form-group">
          <input
              
                type="date"
                className="form-control signup_input"
                name="birthdate"
                id="birthdate"
                value={this.state.birthdate}
                //onChange={event => this.setState({birthdate: event.target.value})}
                onChange={this.handleChange}
            />
            {this.state.errors.birthdate && (
              <div className="alert alert-danger">
                {this.state.errors.birthdate}
              </div>
              )}
          </div> */}

          <div className="form-group">
            <label htmlFor="gender">gender</label>
            <input 
            placeholder="Male-Female"
              className="form-control signup_input"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              id="gender"
              type="text"
             
            />
            {this.state.errors.gender && (
              <div className="alert alert-danger">
                {this.state.errors.gender}
              </div>
            )}
          </div>
          <button type="submit" className="signup_btn">
          Sign up
            <i className="fas fa-sign-in-alt" style={{fontSize: "20px"}}></i>
          </button>
          <p> have an account?
              <a href="/"  className="signinlink">  Sign in</a></p>
        </Form>
        
        </div>
      </React.Fragment>
    );
  }
}

export default SignupForm;