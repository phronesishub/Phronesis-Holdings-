import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './images/cdl2.png'; // Adjust the path as needed
import './NavBar.css'; // Adjust for your CSS file
import ContactForm from './ContactForm'; // Adjust the import path as needed
import '@fortawesome/fontawesome-free/css/all.css';

import HamburgerMenu from './images/HumburgerMenu'; // Adjust the import path as needed

const NavBar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);
  const [isFormVisible, setFormVisible] = useState(false); // State to control ContactForm visibility

  const navigateToAboutUs = () => {
    navigate('/about-us'); // Update the path as per your routing setup
  };

  const navigateHome = () => navigate('/');

  const navigateToDigitalAssetManagement = () => navigate('/digital-asset-management');
  const navigateToAdvisoryAndConsultancy = () => navigate('/advisory-and-consultancy');
  const navigateTometa = () => navigate('/metaa');
  const navigateTocryptoa = () => navigate('/cryptoa');
  const navigateToaia = () => navigate('/aia');

  const Henosis = () => navigate('/Henosis');

  const openForm = () => setFormVisible(true);

  return (
    <nav className="navigation">
      <div className="logo-section-large">
        <div className="logo-sectionl" onClick={navigateHome}>
          <img src={Logo} alt="Company Logo" className="logol" />
          <span className="company-name">PHRONESIS HOLDINGS</span>
        </div>
      </div>
      <div className="logo-section-small" onClick={navigateHome}>
      
          <img src={Logo} alt="Company Logo" className="logos" />
          <span className="company-names">PHRONESIS HOLDINGS</span>
     
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item" onClick={navigateHome}>
            Home
          </li>
          <li className="nav-item" onClick={navigateToAboutUs}>
            About Us
          </li>
          <li className="nav-item" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            Products <i className="fa fa-caret-down"></i>
            {isDropdownVisible && (
              <div className="dropdown-content">
                <a href="#" onClick={navigateTometa}>
                  Metaverse
                </a>
                <a href="#" onClick={navigateTocryptoa}>
                  Cryptocurrencies
                </a>
                <a href="#" onClick={navigateToaia}>
                  Artificial Intelligence
                </a>
              </div>
            )}
          </li>

          <li className="nav-item" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            Services <i className="fa fa-caret-down"></i>
            {isDropdownVisible && (
              <div className="dropdown-content">
                <a href="#" onClick={() => navigate('/digital-asset-investment')}>
                  Digital Asset Investment
                </a>
                <a href="#" onClick={navigateToDigitalAssetManagement}>
                  Digital Asset Management
                </a>
                <a href="#" onClick={navigateToAdvisoryAndConsultancy}>
                  Advisory & Consultancy
                </a>
              </div>
            )}
          </li>

          <li className="nav-item" onClick={Henosis}>
            Henosis Investment Group
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="contact-us" onClick={openForm}>
            Get Started
          </button>
        </div>
        <HamburgerMenu />
      </div>
      {isFormVisible && <ContactForm isVisible={isFormVisible} onClose={() => setFormVisible(false)} />}
    </nav>
  );
};

export default NavBar;
