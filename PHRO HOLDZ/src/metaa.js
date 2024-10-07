import React, {useState} from 'react';
import './Meta.css';
import NavBar from './nav';
import Footer from './Footer';
import icon1 from './images/icons/meta33 (2).png'

import icon4 from './images/icons/meta33 (1).png'
import ContactForm from './ContactForm'; // Import your contact form component


const Metaa = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);

  return (
    <div>
      <NavBar />
      <div className="content45container14">
      <div className="imgcontainer">
      <img src={icon1} alt="Icon" className='iconimage45' />
      <h1 className="metaverse-title">Unlocking Metaverse Investment Potential with Phronesis Holdings</h1>

      </div>
        
      
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">Executive Summary</h2>
            <p className="metaverse-text">Brief overview of the metaverse and its significance.</p>
            <p className="metaverse-text">Highlight the potential for growth and investment in the metaverse.</p>
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">Introduction</h2>
            <p className="metaverse-text">Definition of the metaverse and its components.</p>
            <p className="metaverse-text">The current state of the metaverse and its technological underpinnings.</p>
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">The Potential of the Metaverse with Phronesis Holdings</h2>
    
            <p className="metaverse-text"><strong className="metaverse-strong">Expert Market Insights:</strong> Phronesis Holdings' forecasts and market analysis.</p>
            <p className="metaverse-text"><strong className="metaverse-strong">Strategic Technological Investments:</strong>VR/AR, blockchain, and AI strategies by Phronesis Holdings.</p>
            <p className="metaverse-text"><strong className="metaverse-strong">Guidance on User Engagement Trends:</strong> Insights on user adoption and implications for investors.</p>
       
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">Investment Opportunities in the Metaverse with Phronesis Holdings</h2>
            <p className="metaverse-text"><strong className="metaverse-strong">Virtual Real Estate:</strong> Expert advice on buying and developing digital land.</p>
            <p className="metaverse-text"><strong className="metaverse-strong">Digital Assets and NFTs:</strong> Investment strategies for unique digital items and art.</p>
            <p className="metaverse-text"><strong className="metaverse-strong">Gaming and Entertainment:</strong> Opportunities in virtual experiences and events curated by Phronesis Holdings.</p>
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">Risks and Challenges</h2>
            <p className="metaverse-text"><strong className="metaverse-strong">Technological Risks:</strong> Dependence on evolving technologies.</p>
            <p className="metaverse-text"><strong className="metaverse-strong">Regulatory Uncertainty:</strong> Insights on the current and potential regulatory landscape provided by Phronesis Holdings.</p>
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">Strategies for Investment Companies</h2>
            <p className="metaverse-text"><strong className="metaverse-strong">Diversification:</strong> Phronesis Holdings' approach to spreading investments across different sectors of the metaverse.</p>
          
            <p className="metaverse-text"><strong className="metaverse-strong">Partnerships and Collaborations:</strong> Strategies for joining forces with technology providers and platform developers, advised by Phronesis Holdings.</p>
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          
          <div className="metaverse-section-container">
          <img src={icon4} alt="Icon" className='iconimage12' />
            <h2 className="metaverse-subtitle">Future Outlook</h2>
            <p className="metaverse-text">Predictions for the evolution of the metaverse.</p>
            <p className="metaverse-text">Emerging technologies and trends to watch, guided by Phronesis Holdings.</p>
            <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

          </div>
          <>
  
  <ContactForm isVisible={isFormVisible} onClose={closeForm} />
</>
      
      </div>
      <Footer />
    </div>
  );
};

export default Metaa;
