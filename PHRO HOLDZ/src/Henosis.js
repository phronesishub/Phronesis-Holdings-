import React, { useState } from 'react';
import NavBar from './nav';
import './henosis.css';
import Footer from './Footer';
import ContactForm from './ContactForm';
import icon4 from './images/icons/heno.png';

const Henosis = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);

  return (
    <div>
      <NavBar />
      <div className="about-phronesis-holdings">
        <h1 className="about-phronesis-title">HENOSIS INVESTMENT GROUP (HIG)</h1>
        <p className="about-phronesis-text">
          An Exclusive Club Of HIGH NET WORTH WEALTH INDIVIDUALS (HNWWI).

          Henosis Investment Group is a subsidiary of PHRONESIS HOLDINGS. Phronesis Holding is a digital asset investment and management company that specializes in digital assets like cryptocurrencies, blockchain technology, metaverse, AI, and Web3 projects. We help invest and manage digital assets for Individuals, institutional investors, and private funds.

          Being a member of HIG comes with extra privileges. You get an opportunity to participate in any available opportunities in this digital space once it's found by the team of experts. Get exclusive personalized market research and data on what is happening all around the world in the crypto world, blockchain, metaverse, AI, NFT world, DeFi, DAO, and more.

          The Group will emerge at a later stage to give an opportunity to its members to invest in real-time assets with the help of its partners.
        </p>
        <div className="button-container">
          <button className="glass-button45" onClick={openForm}>Subscribe</button>
        </div>
      </div>

      <ContactForm isVisible={isFormVisible} onClose={closeForm} />
      
      <div className="content45container14">
        <h3>We are creating an exclusive digital asset investment club for High Net Worth Individuals (HNWIs) focusing on cryptocurrencies, the metaverse, AI, and Web3.</h3>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Specialized Investment Focus</h2>
          <p className="crypto-text1">We fully focus on top well researched and performing assets including cryptocurrencies (e.g., Bitcoin, Ethereum, Solana, Bnb etc), tokens, NFTs, metaverse projects, AI startups, and Web3 technologies.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Expertise and Insights</h2>
          <p className="crypto-text1">At HIG we provide access to expert insights, market analysis, and research reports specifically tailored to digital assets, metaverse projects, AI technologies, and Web3 innovations. This may include partnerships with blockchain experts, AI researchers, and Web3 developers.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Deal Flow and Opportunities</h2>
          <p className="crypto-text1">We have cultivated a robust deal flow pipeline by leveraging connections within the digital asset ecosystem to source high-quality investment opportunities, including early-stage token sales, NFT drops, metaverse real estate, AI-driven platforms, and Web3 protocols, to only our HIG members.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Educational Resources</h2>
          <p className="crypto-text1">We offer every HIG member educational resources, workshops, and seminars focused on digital asset investing, blockchain technology, metaverse economics, AI applications, and Web3 developments to enhance members' understanding and expertise in these areas.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Networking and Collaboration</h2>
          <p className="crypto-text1">We will facilitate networking events, exclusive meetups, and virtual gatherings where members can connect with industry insiders, founders, and fellow investors to share insights, collaborate on projects, and explore investment opportunities collaboratively.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Portfolio Diversification</h2>
          <p className="crypto-text1">As a group we emphasize the importance of portfolio diversification within digital assets, including exposure to various cryptocurrencies, metaverse assets, AI startups, and Web3 platforms to manage risk and capture upside potential across different segments of the digital economy.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Due Diligence and Risk Management</h2>
          <p className="crypto-text1">We have Implemented rigorous due diligence processes to evaluate potential investments, including technical analysis, project fundamentals, team expertise, regulatory considerations, and market dynamics. Additionally, we prioritize risk management strategies to mitigate potential downside risks associated with digital asset investments.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Exclusive Access and Benefits</h2>
          <p className="crypto-text1">We provide members with exclusive access to pre-sale allocations, private investment opportunities, curated NFT drops, early-stage token offerings, and VIP privileges within the digital asset ecosystem to enhance their investment experience and generate value.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Transparent Governance and Reporting</h2>
          <p className="crypto-text1">We have established transparent governance structures, including clear rules, decision-making processes, and reporting mechanisms to ensure accountability, transparency, and trust among members.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>

        <div className="crypto-section-container14">
          <img src={icon4} alt="Icon" className='iconimage' />
          <h2 className="Asset-phronesis-title21">Long-Term Vision</h2>
          <p className="crypto-text1">We Foster a long-term investment mindset among members, emphasizing the transformative potential of digital assets, metaverse technologies, AI advancements, and Web3 innovations over time, and encourage patient, strategic investment approaches aligned with long-term wealth accumulation and preservation goals.</p>
          <button className="learn-more-button12" onClick={openForm}>Learn More</button>
        </div>
      </div>

      <Footer />
      
      <ContactForm />
    </div>
  );
};

export default Henosis;