import '../css/header.css'
import logo from '../images/logo.png'
// import Login from '../components/Login'
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
                <li>Home</li>
                <li>Jobs</li>
                <li>Company</li>
                <li>Services</li>
                <li>About Us</li>
            </ul>
            </div>

            <div className="btns">
            <button id="login-btn">Login</button>
            <button id="signin-btn">Sign-Up</button>
            </div>
            </div>
            
        </div>
        
        </>
    );
}
export default Header;