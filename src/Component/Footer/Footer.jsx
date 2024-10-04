import React from "react";
import "./Footer.css";
import Logo2 from '/src/assets/Logo2.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo2} alt="Logo" className="logo" />
          <h3>Logo</h3>
        </div>
        
        <div className="right">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Mobile app</h4>
              <ul>
                <li>Features</li>
                <li>Live share</li>
                <li>Video record</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                <li>Featured artists</li>
                <li>The Portal</li>
                <li>Live events</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>History</li>
              </ul>
            </div>
          </div>

          <div className="footer-buttons">
            <button className="register-btn">Register</button>
            <button className="login-btn">Log in</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
          <p>© Photo, Inc. 2019. We love our users!</p>
          <div className="social-icons">
            <p>Follow Us:</p>
            <div className="icon">
            <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
