import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Greenhouse.png'; // Make sure image file has no spaces or special chars
import Logo_name from '../../logoName.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <img src={Logo_name} alt="logo" className="logo_name" />
        <img src={Logo} alt="plants" className="plants_hanging" />
        <img src={Logo} alt="plants" className="plants_hanging2" />
        <div className="navItems">
          <button className="navButton" onClick={() => navigate('/register')}>
            Register
          </button>
          <button className="navButton" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

