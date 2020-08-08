import React from 'react'
import './Login.css'
import google from "../images/google.png"

export default function Login() {
    return (
        <div className="login-container">
            <form action="" className="login-form">
                <button className="btn btn-ghost">
                    <img src={google} alt="" />
                Login with Google
            </button>
                <small>or</small>
                <div className="form-control-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your Email" />
                </div>
                <div className="form-control-3">
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" placeholder="password" />
                </div>
                <div className="checkbox-tontainer">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>

                    <a href="#">Forget password?</a>
                </div>
                <button className="btn">Log In</button>

                <small>Dont have a account ? <a href="#">sign up</a></small>
            </form>
            <div className="features">
                <div className="features-item">
                    <i className="fas fa-code"></i>
                    <h4>development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, distinctio tempore impedit molestiae optio debitis?</p>
                </div>
                <div className="features-item">
                    <i className="fas fa-gift"></i>
                    <h4>features</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, distinctio tempore impedit molestiae optio debitis?</p>
                </div>
                <div className="features-item">
                    <i className="fas fa-edit"></i>
                    <h4>updates</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, distinctio tempore impedit molestiae optio debitis?</p>
                </div>
            </div>
        </div>
    )
}
