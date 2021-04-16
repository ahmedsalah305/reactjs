import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import '../CSS/Navbar.css'
import Google from '../../../Login/Google';


function Navbar(props) {
    return (
       <React.Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink  className="navbar-brand" to="#">
                    <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26" width="130" height="60" alt="netflixlogo"/>
                    </NavLink >
                    <button style={{backgroundColor:"white"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{color:"black"}} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink  className="nav-link  active" to="/home">Home <span className="sr-only">(current)</span></NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link " to="/dashboard">Dashbord</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link " to="/login">Login</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link " to="/signup">Signup</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link " to="premium">Premium</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link " to="edituser">EditUser</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink  className="nav-link " to="chat">Chat</NavLink >
                            </li>
                            {/* <li className="nav-item">
                            <Google/>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
       </React.Fragment>
    )
}

export default Navbar
