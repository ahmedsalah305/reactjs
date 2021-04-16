import React, { Component } from 'react';
import SignupForm from './SignUpForm';
import Navbar from '../General/Assets/JSX/Navbar';
import ResponsiveFooter from '../General/Assets/JSX/ResponsiveFooter';

class SignUp extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            footer: this.props.responsiveFooterFooter,
            social: this.props.responsiveFooterSocial,
        };
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="login">
                    <Navbar/>
                    <SignupForm/>
                    <ResponsiveFooter responsiveFooterFooter={this.state.footer} responsiveFooterSocial={this.state.social}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SignUp;