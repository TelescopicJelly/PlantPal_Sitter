import React, {useState} from "react";

export const Register = (props) => {

    // Stores the values of email and password the user types in
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass)

    }
    return (
        <div className="auth-form-container">
            <form className="register-form"onSubmit={handleSubmit}>
                <label htmlFor="full-name">Full Name:</label>
                <input type="name" placeholder="FullName" id="name" name="name"></input>
                
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" ></input>
                
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="***********" id="password" name="password" ></input>

                <button type="submit"> Sign-Up</button>
            </form>
    
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Have an Account? Sign in Here </button>
        </div>
    )

}