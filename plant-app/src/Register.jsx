//import { response } from "express";
import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    // Stores the values of email and password the user types in
    const [emailReg, setEmailReg ] = useState('');
    const [passReg, setPassReg ] = useState('');
    const [nameReg, setNameReg] = useState('');

    const [registerStatus, setRegisterStatus] = useState('');

    const navigate = useNavigate();


    const register = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/register', {
            email: emailReg,
            password: passReg,
            first_name: nameReg, 
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } 
        }).catch(error => {
            setRegisterStatus("An error occurred. Please try again.");
            console.log("Login error:", error);
        });
    };


    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={register}>
                <label htmlFor="full-name">Full Name:</label>
                <input type="name" onChange={(e) => setNameReg(e.target.value)}placeholder="FullName" id="name" name="name"></input>
                
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e) => setEmailReg(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" ></input>
                
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e) => setPassReg(e.target.value)} placeholder="***********" id="password" name="password" ></input>

                <button type="submit"> Sign-Up</button>
            </form>
    
            <button className="link-btn" onClick={() => navigate('/login')}> Have an Account? Sign in Here </button>
            <h1>{registerStatus}</h1>
        </div>
    )

}