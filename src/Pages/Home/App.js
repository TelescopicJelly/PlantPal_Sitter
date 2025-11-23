import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Menu from './Pages/Menu/Sitter_Menu';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
  <Router basename="/PlantPal_Sitter">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/sitter_menu" element={<Menu />} />
      <Route path="/payment_form" element={<Payment />} />
    </Routes>
  </Router>

  );
}

export default App;