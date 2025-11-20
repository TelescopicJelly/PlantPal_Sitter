import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import './Sitter_Menu.css'
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Sitter_Menu = () => {
  const [dateRange, setDateRange] = useState(new Date());

  const navigate = useNavigate();

  return (
    <div className='sitter-menu'>
      <form className="booking-form">
        <h2 className="form-title">Reserve Your Time</h2>
        <label htmlFor="date-picker" className="form-label">
          <b>What time do you want to reserve?</b>
        </label>
        <div className="form-input">
          <DateTimePicker 
            id="date-picker" 
            onChange={setDateRange} 
            value={dateRange} 
            className="date-time-picker"
          />
        </div>
        <button type="submit" onClick={() => navigate('/payment_form')} className="request-btn">Request a Booking</button>
      </form>
    </div>
    
  );
};

export default Sitter_Menu;




