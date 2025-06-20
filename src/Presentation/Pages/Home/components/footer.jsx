import React from 'react';
import './Footer.css';
import LoginDialog from '../../../components/Dialogs/login_dialog';
import { useState } from 'react';
const Footer = () => {
  const[openDialog,setOpenDialog]=useState(false);
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-brand">Easy<span style={{color:'rgb(51, 51, 51)'}}>Rent</span></h2>
          <p className="footer-description">
            Discover, connect, and secure your dream rental property with ease through our platform.
          </p>
        </div>
        
        {/* Products Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Products</h3>
          <ul className="footer-list">
            <li>House</li>
            <li>Apartments</li>
            <li>Condos</li>
            <li>Villas</li>
          </ul>
        </div>
        
        {/* Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Resources</li>
            <li>FAQ</li>
            <li onClick={()=>setOpenDialog(true)}>Login | Sign-Up</li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact us</h3>
          <address className="footer-contact">
            <p>15 Al-Razi Street, Damascus 11094</p>
            <p>(+963)-31754165</p>
            <p>teamEasyRent@gmail.com</p>
          </address>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 <span style={{color:'var(--app-blue)'}} >Easy</span><span style={{color:'black'}}>Rent</span> Property Management, <span style={{color:'rgb(0, 122, 61)'}}>Damascus</span> <span style={{color:'rgb(206, 17, 38)'}}>Syrian</span> <span style={{color:'rgb(206, 17, 38)'}}>Arab</span>  <span style={{color:'black'}}>Republic</span>  </p>
        <div className="footer-links">
          <span>Terms And Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
        <LoginDialog open={openDialog} onClose={()=>setOpenDialog(false)}/>

    </footer>
  );
};

export default Footer;