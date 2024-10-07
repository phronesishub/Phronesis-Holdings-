import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import Logo from './images/cdl2.png'; // Adjust the path as needed
import FacebookIcon from './images/fb.png';
import InstagramIcon from './images/inst.png';
import TelegramIcon from './images/tl.png';

const Footer = () => {
  const navigate = useNavigate();
  const openForm = () => {
    // Functionality to open contact form
  };

  
  const navigateToDigitalAssetManagement = () => navigate('/digital-asset-management');
  const navigateToAdvisoryAndConsultancy = () => navigate('/advisory-and-consultancy');
  const navigateTometa = () => navigate('/metaa');
  const navigateTocryptoa = () => navigate('/cryptoa');
  const navigateToaia = () => navigate('/aia');



return (
    <footer className="footerglass">
      <div className="footer-content">
  
        <div className="product-section">
          <h3 onClick={openForm}>Contact Us</h3>
          <p className="email-info">
            Email: <a href="mailto:support@phronesisholdings.com">support@phronesisholding.com</a>
          </p>
          <p>Phone: +256 78 795 4965</p>
          <div className="follow-us-container1">
       
        <div className="social-icons1">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className='socialimage1'/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className='socialimagei1'/>
          </a>
          <a href="https://t.me/Phronesis14" target="_blank" rel="noopener noreferrer">
            <img src={TelegramIcon} alt="Telegram" className='socialimaget1'/>
          </a>
        </div>
      </div>
        </div>
        <div className="product-section">
          <h3>Products</h3>
          <ul>
          <li href="#" onClick={navigateTometa}>Metaverse</li>
        <li href="#" onClick={navigateTocryptoa}>Cryptocurrencies</li>
        <li href="#" onClick={navigateToaia}>artificial intelligence</li>
          </ul>
        </div>

        <div className="product-section">
          <h3>Services</h3>
          <ul>
          <li href="#" onClick={() => navigate('/digital-asset-investment')}>Digital Asset Investment</li>
        <li href="#" onClick={navigateToDigitalAssetManagement}>Digital Asset Management</li>

        <li href="#" onClick={navigateToAdvisoryAndConsultancy}>Advisory & Consultancy</li>
          </ul>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Phronesis Holdings Company</p>
     
      <div className="footer-logo">
      <img src={Logo} alt="Company Logo" className="logo-footer" />
        <p>Phronesis Holdings</p>
      </div>
  
    </footer>
  );
};


export default Footer;
