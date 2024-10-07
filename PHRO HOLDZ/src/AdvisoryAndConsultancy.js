import React, {useState} from 'react';
import NavBar from './nav';
import './Advisory.css'; // Your existing CSS file
import Footer from './Footer';
import ContactForm from './ContactForm'; // Import your contact form component



const AdvisoryAndConsultancy = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);


  return (
    <div>
        < NavBar/>
        <div className="Advisory-phronesis-holdings">
        <h1 className="Advisory-phronesis-title">Advisory & Consultancy</h1>
        <p className="Advisory-phronesis-text">
      
     
        As a top digital asset investment & management company, we offer deep knowledge and understanding around the crypto market. Our team of experts in the industry are available to provide advisory support and consultation inline with digital space.        </p>
        <div class="button-container">
  <button class="glass-button" onClick={openForm}>Speak With Our Advisor</button>

</div>

        </div>
        <>
  
  <ContactForm isVisible={isFormVisible} onClose={closeForm} />
</>
      
    
        <Footer />

    </div>
  
  );
};

export default AdvisoryAndConsultancy;
