import React from 'react'
import InfoPage from './InfoPage';
import PassPage from './PassPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Alert} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch} from 'react-router-dom';
  

class User extends React.Component{
    render(){
        return(
        <Router>

            <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home"> <Link to='/Account/info'> Info </Link> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1"> <Link to='/Account/password'> New Password </Link> </Nav.Link>
            </Nav.Item>
            </Nav>

            <Alert style={{display:this.props.display}} variant={this.props.variant}>
            <p>
                {this.props.message}    
            </p>
            </Alert>

            <Switch>
                <Route path='/Account/info'>
                    <InfoPage data={this.props.data}
                            changeHandler={this.props.changeHandler}
                            save={this.props.save}
                            updateavatar={this.props.updateavatar}
                            removeAvatar={this.props.removeAvatar}
                            />
                </Route>

                <Route path='/Account/password'>
                    <PassPage passHandler={this.props.passHandler} savePass={this.props.savePass}/>
                </Route>    
            </Switch>

        </Router>
        )
    }
}

export default User
