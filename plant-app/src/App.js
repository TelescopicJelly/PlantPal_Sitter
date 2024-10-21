import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';

function App() {
  
  // Makes the starting page the login page
  const [currentForm, setCurrentForm ] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    // Displays the Login.jsx file contents
    <div className="App">
      <img src="PlantPal_Sitter_Logo.png" alt="My Website Logo"></img>
      
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/>  : <Register onFormSwitch={toggleForm}/>


      }
      

    </div>
  );
}

export default App;
