import React from 'react';
import './Navbar.css';
import Logo1 from '/src/assets/Logo1.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <div className="logo-square"><img src={Logo1} alt="" /></div>
                <span>Logo</span>
            </div>
            <ul className="navbar-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#support">Support</a></li>
            </ul>
            <div className="navbar-buttons">
                <button className="login-btn">Login</button>
                <button className="register-btn">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
