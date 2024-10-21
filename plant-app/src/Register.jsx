import React, {useState} from "react";
import axios from "axios";

export const Register = (props) => {

    // Stores the values of email and password the user types in
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');
    const [name, setName] = useState('');

    const register  = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', {
            email: email, 
            password: pass,
            first_name: name
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="auth-form-container">
            <div className="register-form">
                <label htmlFor="full-name">Full Name:</label>
                <input type="name" onChange={(e) => setName(e.target.value)}placeholder="FullName" id="name" name="name"></input>
                
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" ></input>
                
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="***********" id="password" name="password" ></input>

                <button type="submit" onClick = {register}> Sign-Up</button>
            </div>
    
            <button className="link-btn" onClick={() => {props.onFormSwitch('login')}}> Have an Account? Sign in Here </button>
        </div>
    )

}