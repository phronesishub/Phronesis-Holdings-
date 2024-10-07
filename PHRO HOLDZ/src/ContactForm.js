// ContactForm.js
import React from 'react';
import './ContactForm.css'; // Ensure you have a CSS file to style the modal
// import contactImage from './pat'; // Replace with the path to your image


const ContactForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., sending data to a server
    // For now, we'll just close the form
    onClose();
  };

  return (
    <div className="contact-form-modal">
      <div className="contact-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Get In Touch</h2>
        {/* <div className="contact-form-image-container">
          <img src={contactImage} alt="Contact Us" className="contact-form-image"/>
        </div> */}
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="lastName">Full Name *</label>
            <input id="lastName" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input id="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input id="phone" type="tel" required />
          </div>
          <div className="form-group">
            <label>Preferred way of communication: *</label>
            <div className="checkbox-group">
    <input type="checkbox" id="emailContact" name="preferredContact" value="Email" />
    <label htmlFor="emailContact">Email</label>
    <input type="checkbox" id="whatsappContact" name="preferredContact" value="Whatsapp" />
    <label htmlFor="whatsappContact">Whatsapp</label>
    <input type="checkbox" id="telegramContact" name="preferredContact" value="Telegram" />
    <label htmlFor="telegramContact">Telegram</label>
              {/* ... additional checkboxes ... */}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="countryCity">Country/City *</label>
            <input id="countryCity" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" />
          </div>
          <div className="form-group">
              <label>What are you interested in learning more about? *</label>
              <div className="checkbox-group">
                <input type="checkbox" id="digitalWealth" name="interest" value="Digital Wealth Management" />
                <label htmlFor="digitalWealth">Digital Wealth Management</label>
                <input type="checkbox" id="assetManagement" name="interest" value="Asset Management" />
                <label htmlFor="assetManagement">Asset Management</label>
                {/* ... additional checkboxes ... */}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="details">Please provide any other details about your enquiry.</label>
              <textarea id="details" name="details" rows="7" style={{ width: '65%' }}></textarea>
            </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
