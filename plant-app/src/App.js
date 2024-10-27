import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <img src="PlantPal_Sitter_Logo.png" alt="My Website Logo" />
        
        <Routes>
          {/* Default route for "/" renders Login component */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
