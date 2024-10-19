// Used for wanting to store things
import React, {useState} from "react";
export const Login = (props) => {

    // Stores the values of email and password the user types in
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass)
    }
    
    return (
        <div className="auth-form-container">
            <form className="login-form"onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />

                <button type="submit" onClick={() => props.on}> Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't Have an Account? Register Here </button>
        </div>
    )

}