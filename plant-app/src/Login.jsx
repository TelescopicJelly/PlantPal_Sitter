import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [emailLog, setEmailLog] = useState('');
    const [passLog, setPassLog] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            email: emailLog,
            password: passLog,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(`Welcome, ${response.data[0].email}!`);
                navigate('/home'); // Redirect to Home on successful login
            }
        }).catch(error => {
            setLoginStatus("An error occurred. Please try again.");
            console.log("Login error:", error);
        });
    };

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={login}>
                <label htmlFor="email">Email:</label>
                <input value={emailLog} onChange={(e) => setEmailLog(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input value={passLog} onChange={(e) => setPassLog(e.target.value)} type="password" placeholder="***********" id="password" name="password" />

                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/register')}> Don't Have an Account? Register Here </button>
            <h1>{loginStatus}</h1>
        </div>
    );
};
