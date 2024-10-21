// Used for wanting to store things
import React, {useState} from "react";
export const Home = (props) => {

    // Stores the values of email and password the user types in
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');


    
    return (
        <div className="auth-form-container">
            <form className="home-page">
                <button type="submit" onClick={() => props.on}> Schedule a Booking </button>
                <button type="submit" onClick={() => props.on}> Become a Sitter </button>
            </form>
        </div>
    )

}