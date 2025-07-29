import '../css/header.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
function Header(){

    return(
        <>
        <div className="body">
            
        <div className="header">
            <img id="logo"src={logo}/>
            <p id="title">Job portal</p>
            <div className="navlist">

            <ul id="list-items">
                <li>Jobs</li>
                <li>Company</li>
                <li>Services</li>
            </ul>

            <Link to="/login">
            <button id="login-btn">Login</button>
            </Link>
            
            </div>
            
        </div>
        </div>
        </>
    );
}
export default Header;