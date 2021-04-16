import React,{Component} from 'react';
import LoginForm from './LoginForm';
import "../General/Assets/CSS/Login.css"
import Navbar from '../General/Assets/JSX/Navbar';
import ResponsiveFooter from '../General/Assets/JSX/ResponsiveFooter';

class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            footer: this.props.responsiveFooterFooter,
            social: this.props.responsiveFooterSocial,
            flag:this.props.flag,
        };
    }
    change = ()=>{
        this.setState({flag:true})
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="login">
                    <Navbar flag={this.state.flag}/>
                    <LoginForm change={this.change}/>
                    <ResponsiveFooter responsiveFooterFooter={this.state.footer} responsiveFooterSocial={this.state.social}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Login;