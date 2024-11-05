import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Header/>
    
    </div>

  )
}

export default Home
/*export const Home = (props) => {

    
    return (
        <div className="auth-form-container">
            <form className="home-page">
                <button type="submit" onClick={() => props.on}> Schedule a Booking </button>
                <button type="submit" onClick={() => props.on}> Become a Sitter </button>
            </form>
        </div>
    )

}*/