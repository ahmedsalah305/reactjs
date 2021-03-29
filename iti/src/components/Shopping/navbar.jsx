// import React, { Component } from 'react'
import {Link , NavLink} from 'react-router-dom'

const NavBar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Shopping Card</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                    </ul>
                </div>
                <Link to="/cart">
                    <span className="badge badge-primary">
                        <i style={{color:"white"}} className="fas fa-cart-plus">{props.productsCount}</i>
                        </span>
                </Link>
                </div>
        </nav>
     );
}
 
export default NavBar;