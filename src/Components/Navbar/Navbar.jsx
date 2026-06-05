//import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
//import Logo from '../../Greenhouse.png'; // Make sure image file has no spaces or special chars


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 id='logo_name'> PlantPal-Sitter</h1>


        <div className="navItems">
          <button id="signUp_Button" className="navButton" onClick={() => navigate('/register')}>
            Sign Up
          </button>
          <button className="navButton" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
    </div>
  );
};

export default Navbar;

