import React, { Component } from 'react';
import Joi from 'joi-browser'

class Login extends Component {
    state = { 
        userName: "",
        password: "",
        errors: {},
     }

     schema = {
         userName: Joi.string().required(),
         password: Joi.string().required(),
     }
    handelSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        if(errors)
        {return;}
        console.log("submit");
    } 
    validate = () =>{
        const errors = {};
        const state = {...this.state};
        delete state.errors;
        const res = Joi.validate(state , this.schema , {abortEarly:false});
        console.log(res);
    }
    handelChange = e => {
        //clone
        let state = {...this.state}
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //set stat
        this.setState(state)
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handelSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username">UserName</label>
                        <input name="userName" value={this.state.userName} onChange={this.handelChange} id='username' type="text" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input name="password" value={this.state.password} onChange={this.handelChange} id='password' type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;