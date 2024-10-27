// Used for wanting to store things
//import React, {useState} from "react";
export const Home = (props) => {

    
    return (
        <div className="auth-form-container">
            <form className="home-page">
                <button type="submit" onClick={() => props.on}> Schedule a Booking </button>
                <button type="submit" onClick={() => props.on}> Become a Sitter </button>
            </form>
        </div>
    )

}