import React from 'react';
import './Navbar.css' ;
import logo from "../../../assets/logo.png";
import search_light from "../../../assets/search_light.png";
import search_dark from "../../../assets/search_dark.png";
import dark_theme from "../../../assets/dark_theme.png";
import light_theme from "../../../assets/light_theme.png";
import About from '../../About/About';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'> 
                <img src={logo} alt='' className='logo'/>

            <div className="menu">
            <Link to={`/Home`} className="A">Home</Link>
            <Link to={`/About`} className="A">About</Link>
            <Link to={`https://github.com/Zed-913?tab=repositories`} target="_blank" className="A">Project</Link>
             </div>   
                
            
                
        </div>
    )
}

export default Navbar;