import '../css/header.css'
import logo from '../images/logo.png'
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
            <button id="login-btn">Login</button>
            <button id="signin-btn">Sign-in</button>
            </div>
            
        </div>
        </div>
        </>
    );
}
export default Header;