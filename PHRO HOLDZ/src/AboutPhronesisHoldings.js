// AboutPhronesisHoldings.js
import React, {useState} from 'react';
import NavBar from './nav'; // Adjust the import path as needed
import './AboutPhronesisHoldings.css'; // Your existing CSS file
import Footer from './Footer';
import teamMember1 from './images/peterwb2.jpg'; // Replace with actual image paths


const AboutPhronesisHoldings = () => {
  const [showPeterInfo, setShowPeterInfo] = useState(false);

  // Function to toggle Peter's additional info visibility
  const togglePeterInfo = () => setShowPeterInfo(!showPeterInfo);

  return (
    <div>
      <NavBar />
      <div className="about-phronesis-holdings">
        <h1 className="about-phronesis-title">About Phronesis Holdings</h1>
        <p className="about-phronesis-text">
          Phronesis Holding is a digital asset investment and management company that specializes in digital assets like cryptos , blockchain technology, metaverse , ai and web3 projects . We help invest and manage digital assets for Individuals , institutional investors and private funds.               </p>
         
        <div class="button-container">
  <button class="glass-button">Get In Touch</button>
</div>

<section className="FeatureSection">
      <div className="stats-container">
      <div className="stat">
        <div className="stat-value">2024</div>
        <div className="stat-label">Year of Founding</div>
      </div>
      <div className="stat">
        <div className="stat-value">$10M</div>
        <div className="stat-label">Trade Volume</div>
      </div>
      <div className="stat">
        <div className="stat-value">25</div>
        <div className="stat-label">Clients</div>
      </div>
    </div>
     
      </section>

        </div>
        <section className="partnership-section2">
        <div className="container">
          <h2 className="about-us-heading">About Phronesis Holding</h2>
    
          <p className="about-us-paragraph">
          Phronesis Holding is a digital asset investment and management company that specializes in digital assets like cryptos , blockchain technology, metaverse , ai and web3 projects . We help invest and manage digital assets for Individuals , institutional investors and private funds.               </p>
        </div>
      </section>
        <section className="section8">
    <div className="team-section" style={{  padding: '0px', textAlign: 'center' }}>
      <h2>Team</h2>
   
      
      <div className="team-members">
        <div className="team-member">
          <img src={teamMember1} alt="Sarah Doe - CEO & Founder" className='teamimg' style={{ width: '80%', height: 'auto', borderRadius: '2%' }} />
          <h3>PETER KAREGEYA</h3>
          <p          className='TEAMFOUND' // Adjust icon size
> FOUNDER</p>

        
              {/* Conditionally rendered paragraph about Peter */}
              <p>                      Peter is a seasoned digital entrepreneur, crypto investor, trader, and blockchain enthusiast. </p>
              {showPeterInfo && (
                <p className="peter-info">
 Worked with various blockchain companies across Africa, Europe, Asia & America. Been part of a couple of startups in Africa that have raised a couple of millions of dollars and have gone ahead to become a success. Peter is one of the early adopters of bitcoin and other cryptos in Africa. He brings this well-versed experience into this great company PHRONESIS HOLDINGS.
           </p>
              )}
                <a  className='teambtn' onClick={togglePeterInfo} >
                {showPeterInfo ? 'Read Less' : 'Read More'}
              </a>
        </div>
        
    
      </div>
    </div>
    </section>
      <Footer />

    </div>
  );
};

export default AboutPhronesisHoldings;
