import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class GoogleAuth extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="568478652395-j52dtlgtvsvr1h3qm3gafkcldljd2sf5.apps.googleusercontent.com"
        buttonText="Login using Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
    
        
        />
      </div>
    )
  }
}

export default GoogleAuth


// import React, { Component } from 'react';

// class Google extends Component {
//     state = { 
//         isSignedIn:null,
//     }
//     componentDidMount(){
//         window.gapi.load('client:auth2' , ()=>{
//             window.gapi.client.init({
//                 clientId:"568478652395-j52dtlgtvsvr1h3qm3gafkcldljd2sf5.apps.googleusercontent.com",
//                 scope:'email',
//             }).then(() =>{
//                 this.auth = window.gapi.auth2.getAuthInstance()
//                 this.setState({isSignedIn:this.auth.isSignedIn.get()})
//                 this.auth.isSignedIn.listen(()=>this.onAuthChange())
//             })
//         })
//     }
//     onAuthChange = () =>{
//         this.setState({isSignedIn:this.auth.isSignedIn.get()})
//     }
//     renderAuthButton = ()=>{
//         if(this.state.isSignedIn === null)
//         {
//             return null;
//         }
//         else if(this.state.isSignedIn)
//         {
//             return (
//                 <button onClick={this.onSignOutClick} className="ui red google button">
//                     <i className="google icon"></i>
//                     Sign Out
//                 </button>
//             )
//         }
//         else
//         {
//             return (
//                 <button onClick={this.onSignInClick} className="ui red google button">
//                     <i className="google icon"></i>
//                     Sign In
//                 </button>
//             )
//         }
//     }
//     onSignInClick = () =>{
//         this.auth.signIn()
//     }
//     onSignOutClick = () =>{
//         this.auth.signOut()
//     }
//     render() { 
//         return ( 
//             <React.Fragment>
//                 <div>{this.renderAuthButton()}</div>
//             </React.Fragment>
//          );
//     }
// }
 
// export default Google;