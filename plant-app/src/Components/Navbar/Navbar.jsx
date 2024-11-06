import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className="navbar">
        <div className="navContainer">
            <h1 className="logo_name">PlantPal-Sitter</h1>
            <div className="navItems">
                <button className="navButton" onClick={() => navigate('./register')}>Register</button>
                <button className="navButton" onClick={() => navigate('./login')}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar