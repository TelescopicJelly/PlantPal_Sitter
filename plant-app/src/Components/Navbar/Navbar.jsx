import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import Logo from "../../Copy of Blu’s Greenhouse.png";
import Logo_name from "../../logo_name.png";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navContainer">
                <img src={Logo_name} alt="logo" className="logo_name" />
                <img src={Logo} alt="logo" className="plants_hanging" />
                <img src={Logo} alt="logo" className="plants_hanging2" />
                <div className="navItems">
                    <>
                        <button className="navButton" onClick={() => navigate('./register')}>Register</button>
                        <button className="navButton">Login</button>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
