import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import './App.css';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import  Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Menu from './Pages/Menu/Sitter_Menu';


function App() {
  return (
 
    <Router>
      <div className="App">
      {/*<img src={Logo} alt="My Website Logo" className='logo' />*/}
        
        <Routes>
          {/* Default route for "/" renders Login component */}
          {/*<Route path="/" element={<Navigate to="/login" />} />*/}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sitter_menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
