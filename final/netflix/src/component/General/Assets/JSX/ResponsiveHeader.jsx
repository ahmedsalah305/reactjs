import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './ResponsiveHeaderStyle';

const ResponsiveHeader = () => {
return (
	<Navbar>
        <Navbar.Brand style={{color:"white"}} href="/">
            Netflix
        </Navbar.Brand>
	<Nav>
		<Bars />
		<NavMenu>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/premium'>
            premium
            </NavLink>
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
            <NavLink to='/team'>
                Teams
            </NavLink>
            <NavLink to='/blogs'>
                Blogs
            </NavLink>
            <NavLink to='/sign-up'>
                Sign Up
            </NavLink>
		</NavMenu>
		<NavBtn>
		    <NavBtnLink to='/signin'>Get Started</NavBtnLink>
		</NavBtn>
	</Nav>
	</Navbar>
);
};

export default ResponsiveHeader;
