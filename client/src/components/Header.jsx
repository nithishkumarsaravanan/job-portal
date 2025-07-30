import '../css/header.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import React from 'react'
import Index from './index'
function Header(){

    return(
        <>
        <div className="body">
            
        <div className="header">
            <div className="logo">
            <img id="logo" src={logo} alt="Job Portal Logo" />
            <p id="title">Job portal</p>
            </div>

            <div className="navlist">

            <ul id="list-items">
                <li>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                </li>
                <li>Jobs</li>
                <li>Company</li>
                <li>Services</li>
                <li>About Us</li>
            </ul>
            </div>

            <div className="btns">
                <Link to="/login">
            <button id="login-btn" >Login</button>
            </Link>
            <button id="signin-btn">Sign-Up</button>
            </div>

            
            {/* <button id="login-btn">Login</button> */}
            
            
            </div>
            
        </div>
        
        </>
    );
}
export default Header;