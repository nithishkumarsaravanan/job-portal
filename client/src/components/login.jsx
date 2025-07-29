function Login(){
    return(
        <>
        <div className="login">
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    );
}
export default Login;

import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <div className='login'>

        <div className='login-container'>

            <h2 id='loginHeading'> Job Portal</h2>

            <h1 id='login'>Login</h1>

            <label id='emaillabel'>Email address</label>
            <input  id='emailInput' type="text" name='email' placeholder='enter your email' />

            <label id='passwordlabel'>Password</label>
            <input id='passwordInput' type="password" name='password' placeholder='enter your password' />

            <button id='loginButton'>Login</button>

            <div className='login-footer'>

            <p>Don't have an account?</p>

            <a id='signuplink' href="/signin">sign up</a>

            </div>

        </div>
      
    </div>
  )
}

export default Login
