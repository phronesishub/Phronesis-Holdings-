import React, {useState} from 'react';
import NavBar from './nav';
import './DigitalAssetManagement.css';
import Footer from './Footer';
import icon1 from './images/icons/earning.png'
import icon2 from './images/icons/investment(1).png'
import icon3 from './images/icons/investment.png'
import icon4 from './images/icons/return-on-investment.png'
import ContactForm from './ContactForm';


const DigitalAssetManagement = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);


  return (
    <div>
        < NavBar/>
        <div className="Management-phronesis-holdings">
        <h1 className="Management-phronesis-title">Digital Asset Management</h1>
        <p className="Management-phronesis-text">
  
   
        After many years around the digital market, our team put together their mind and designed an excellent way we will help manage digital assets for our dear clients. We provide access to monitoring the performance of client’s assets. Here a client with the help of our tools, they are able to know how their assets are performing.        </p>
        <div class="button-container">
  <button class="glass-button" onClick={openForm}>Get In Touch</button>
</div>

        </div>
        <>
  
  <ContactForm isVisible={isFormVisible} onClose={closeForm} />
</>
        <div class="content45container1">
      
    <div class="crypto-section-container1">

            <img src={icon4} alt="Icon" className='iconimage' />
  
        <h2 class="crypto-subtitle1">Key Investment Opportunities</h2>
        <ul class="crypto-list1">
            <p class="crypto-text1">- Bitcoin and Ethereum as foundational assets with long-term growth potential.</p>
            <p class="crypto-text1">- Altcoins and tokens that offer innovative solutions or serve niche markets.</p>
            <p class="crypto-text1">- Decentralized finance (DeFi) projects that are redefining banking and financial services.</p>
        </ul>
        <button class="learn-more-button1" onClick={openForm}>Learn More</button>
        <div class="crypto-line"></div>
    </div>

    <div class="crypto-section-container1">

            <img src={icon3} alt="Icon"  className='iconimage'/>
     
        <h2 class="crypto-subtitle1">Market Trends and Analysis</h2>
        <p class="crypto-text1">
            The cryptocurrency market is known for its volatility but also for its substantial growth potential. Trends such as institutional adoption, regulatory developments, and technological advancements significantly impact market movements.
        </p>
        <button class="learn-more-button1" onClick={openForm}>Learn More</button>
        <div class="crypto-line"></div>
    </div>

    <div class="crypto-section-container1">
   
            <img src={icon2} alt="Icon" className='iconimage' />
     
        <h2 class="crypto-subtitle1">Understanding the Risks</h2>
        <p class="crypto-text1">
            Cryptocurrency investments come with their set of risks, including market volatility, regulatory changes, and security challenges. It's essential to conduct thorough research and consider risk management strategies.
        </p>
        <button class="learn-more-button1" onClick={openForm}>Learn More</button>
        <div class="crypto-line"></div>
    </div>

    <div class="crypto-section-container1">

            <img src={icon1} alt="Icon" className='iconimage' />
     
        <h2 class="crypto-subtitle1">Strategic Investment Approaches</h2>
        <p class="crypto-text1">
            Diversification, long-term holding, active trading, and participating in staking or yield farming are among the strategies investors can adopt to navigate the cryptocurrency market.
        </p>
        <button class="learn-more-button1" onClick={openForm}>Learn More</button>
        <div class="crypto-line"></div>
    </div>
</div>

        <Footer />

    </div>
  );
};

export default DigitalAssetManagement;
