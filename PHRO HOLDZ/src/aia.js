import React, {useState} from 'react';
import './Aia.css'; // Assuming you'll also create a corresponding CSS file for styling
import NavBar from './nav';
import Footer from './Footer';
import icon1 from './images/icons/ai1.png'

import icon4 from './images/icons/ai2.png'
import ContactForm from './ContactForm'; // Import your contact form component


const Aiaa = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);


  return (
    <div>
      <NavBar />
     

<div className="content45container14">
<div className="imgcontainer">
<img src={icon1} alt="Icon" className='iconimage45' />
<h1 className="metaverse-title">Maximizing Returns with Artificial Intelligence Investments: A Phronesis Holdings Perspective</h1>

</div>
  



    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Introduction to Artificial Intelligence Solutions</h2>

      <p className="metaverse-text">Artificial Intelligence (AI) encompasses a range of technologies that enable machines to learn from data, make decisions, and perform tasks that traditionally require human intelligence. From machine learning to natural language processing, AI is revolutionizing industries across the board.</p>

      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Unlocking Investment Potential with Phronesis Holdings</h2>
      <p className="metaverse-text">The AI market is poised for explosive growth, driven by advancements in technology, increasing adoption across sectors, and significant investments in AI startups and projects. Investing in AI offers the potential for substantial returns as these technologies become integral to the global economy. Phronesis Holdings provides expert guidance and strategic solutions to maximize your AI investment portfolio.</p>
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Key Areas for AI Investment with Phronesis Holdings</h2>
      <p className="metaverse-text">Benefit from Phronesis Holdings' insights into AI platforms and tools for developers and businesses.</p>
      <p className="metaverse-text">Explore advanced analytics and data processing services recommended by Phronesis Holdings.</p>
      <p className="metaverse-text">Discover robotics and automation technologies curated by Phronesis Holdings for investment opportunities..</p>

      <p className="metaverse-text">Tap into AI applications in healthcare, finance, and retail with Phronesis Holdings' strategic guidance.</p>
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Understanding the Risks with Phronesis Holdings</h2>
      <p className="metaverse-text">While AI presents significant investment opportunities, it also comes with risks related to technological complexity, ethical considerations, regulatory challenges, and market competition. With Phronesis Holdings, you receive comprehensive risk assessment and management strategies tailored to your AI investment goals..</p>
    
      <button class="learn-more-button12" onClick={openForm}>Get Started  </button>

    </div>
    
    <div className="metaverse-section-container">
    <img src={icon4} alt="Icon" className='iconimage125' />
      <h2 className="metaverse-subtitle">Strategic Investment Approaches with Phronesis Holdings</h2>
      <p className="metaverse-text">        Successful AI investment strategies may involve diversifying across different AI technologies and applications, engaging in venture capital funding for AI startups, or investing in established companies leading the AI revolution, all guided by Phronesis Holdings' expertise.
</p>

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

export default Aiaa;
