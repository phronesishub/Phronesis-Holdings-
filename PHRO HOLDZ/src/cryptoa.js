import React, {useState} from 'react';
import './Cryptoa.css'; // Assuming you'll create a corresponding CSS file for styling
import NavBar from './nav';
import Footer from './Footer';
import icon1 from './images/icons/cr1.png'
import ContactForm from './ContactForm'; // Import your contact form component

import icon4 from './images/icons/cr2.png'

const Cryptoaa = () => {
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
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Introduction to Cryptocurrency Solutions</h2>
      <p className="metaverse-text">Cryptocurrencies represent a revolutionary form of digital money that operates independently of a central authority. Built on blockchain technology, they offer a transparent, secure, and decentralized way of conducting transactions.</p>
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Why Choose Phronesis Holdings for Cryptocurrency Investment?</h2>

      <p className="metaverse-text">Investing in cryptocurrencies can offer substantial returns, access to new forms of technology and finance, and participation in the growth of decentralized and digital economies. Phronesis Holdings provides expert guidance and strategic solutions to maximize your investment potential.</p>
  
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Key Investment Opportunities with Phronesis Holdings</h2>
      <p className="metaverse-text">Benefit from Phronesis Holdings' insights into foundational assets like Bitcoin and Ethereum with long-term growth potential.</p>
      <p className="metaverse-text">Explore innovative altcoins and tokens recommended by Phronesis Holdings that offer unique solutions or serve niche markets.</p>

      <p className="metaverse-text">Participate in cutting-edge decentralized finance (DeFi) projects curated by Phronesis Holdings, redefining banking and financial services.</p>
           <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Market Trends and Analysis by Phronesis Holdings</h2>
      <p className="metaverse-text">The cryptocurrency market is known for its volatility but also for its substantial growth potential. Phronesis Holdings' expert analysis of trends such as institutional adoption, regulatory developments, and technological advancements significantly impact market movements.</p>
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Understanding Risks with Phronesis Holdings</h2>
      <p className="metaverse-text">Cryptocurrency investments come with their set of risks, including market volatility, regulatory changes, and security challenges. With Phronesis Holdings, you receive comprehensive risk assessment and management strategies tailored to your investment goals.</p>
    
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Strategic Investment Approaches with Phronesis Holdings</h2>
      <p className="metaverse-text">iversification, long-term holding, active trading, and participating in staking or yield farming are among the strategies investors can adopt with Phronesis Holdings to navigate the cryptocurrency market successfully.</p>
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

export default Cryptoaa;
