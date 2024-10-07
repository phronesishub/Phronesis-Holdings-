// DigitalAssetInvestment.js
import React, {useState} from 'react';
import NavBar from './nav'; // Import NavBar if you want to include it on the page
import './DigitalAssetInvestment.css';
import Footer from './Footer';
import ContactForm from './ContactForm';

const DigitalAssetInvestment = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);



  return (
    <div>
      <NavBar />
      <>
  
  <ContactForm isVisible={isFormVisible} onClose={closeForm} />
</>
      <div className="Asset-phronesis-holdings">
        <h1 className="Asset-phronesis-title">Digital Asset Investment</h1>
        <p className="Asset-phronesis-text">
    
        Phronesis Holdings helps you invest in our top 30 best performing digital assets based on our research and strong beliefs we have in those specific assets. With over hundreds of thousands of crypto assets, we pick what we call our top 30 best digital assets where we invest our clients' money and we can rest assured of its growth and performance throughout the time we have to hold the investors' assets or investments.

With our cutting-edge technology and a great team of experts and analysts in the crypto market, we select the right assets we have built confidence in based on many fundamentals and strong reasons for us to consider those assets as the best to HOLD our assets in.        </p>

  <button class="glass-button21" onClick={openForm}>Get In Touch</button>

</div>
        {/* <div className="content-container">
        </div> */}
        <Footer />

    </div>
  );
};

export default DigitalAssetInvestment;
