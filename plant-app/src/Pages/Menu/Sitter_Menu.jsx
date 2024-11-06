
//import { DateRange } from 'react-date-range';
import React, { useState } from "react";
import "./Sitter_Menu.css"
//import 'react-date-range/dist/styles.css'; // main css file
//import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
//import 

const Sitter_Menu = () => {
    const [date1, setDate1] = useState(null);

  return (
    <div className='Sitter_Schedule' style={{ padding: "60px"}}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr", gap: "15px"}}>
            <Calendar minDate={new Date()}/>
        </div>
    </div>

  );
};

export default Sitter_Menu;

//import React from 'react'

/*const Sitter_Menu = () => {

    
  return (
    <div>
    <Booking/>
    </div>
  )
}

export default Sitter_Menu*/


