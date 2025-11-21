import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './Booking.css';

const Booking = () => {

    const navigate = useNavigate();

    const url = "https://randomuser.me/api/portraits/men/75.jpg";

    return (
      <div className="PersonList">
        <h1 className="SitterHeader"> Choose a Sitter </h1>
        <div className="PersonListItem" onClick={() => navigate('/sitter_menu')}>
            <img src={url} alt="PlantSitter_Pic" className="PlantSitter_Pic"/>
            <div className="PlantSitter_Descrip">
                <h4>Name: John Stable</h4>
                <h4>Location: Harrisburg,PA</h4>
                <h4>Rate: $30/per day</h4>
            </div>        
        </div>
      </div>
    )
  }
  
  export default Booking