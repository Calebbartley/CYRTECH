import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../navigation/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CYRTECH</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact"><i class="fa-regular fa-envelope" style={{color: "#bfc3ca"}}/></Link></li>
        <li><a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
