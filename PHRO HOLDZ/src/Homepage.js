

import React, { useState, useEffect, useRef } from 'react';

import './Homepage.css';
import {  useNavigate } from 'react-router-dom';
import cryptoConferenceImage from './images/blcr.png'; // Import the crypto conference image
import blockchainWebinarImage from './images/zoom.jpg';
import sicon from './images/support.png';
 // Import the blockchain webinar image
import cryptoImage from './images/conf.jpg'; 
import ChatBox from './Chatbox';
import heno from './images/henossi.jpg';
import loadingIcon from './images/load.png'; 
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NavBar from './nav'; 
import HamburgerMenu from './images/HumburgerMenu';
import FacebookIcon from './images/fb.png';
import InstagramIcon from './images/inst.png';
import TelegramIcon from './images/tl.png';
import FirstImage from './images/33.png';
import icon4 from './images/cdl2.png'

import SecondImage from './images/11.jpg';
import ThirdImage from './images/55.jpeg';

import Footer from './Footer'; // Import the Footer component




import IconImage1 from './images/Picture5.png'; // Replace with your icon path
import IconImage2 from './images/Picture6.png'; // Replace with your icon path
import IconImage3 from './images/Picture7.png'; // Replace with your icon path


import ContactForm from './ContactForm';
import ServiceComponent from './ServiceComponent';
import assetIcon from './images/Picture2.png';
import advisoryIcon from './images/Picture3.png';
import infrastructureIcon from './images/Picture4.png';



import image1 from "./images/2222.png"; // Import your images
import image2 from "./images/3333.png"; // Import your images
import image3 from "./images/4444.png"; // Import your images
import image33 from "./images/1111.png"; // Import your images
const isSmallScreen = () => window.innerWidth < 768; // Function to check screen size





const Homepage = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const nextYearMarch = new Date(new Date().getFullYear() + 1, 2, 2);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const tradingViewRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [eventCountdowns, setEventCountdowns] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const [marketCap, setMarketCap] = useState(null);
  const [articles, setArticles] = useState([]);

  const openForm = () => setFormVisible(true);
  const closeForm = () => setFormVisible(false);
  const [showPeterInfo, setShowPeterInfo] = useState(false);

  // Function to toggle Peter's additional info visibility
  const togglePeterInfo = () => setShowPeterInfo(!showPeterInfo);



  const [loading, setLoading] = useState(true);
  const [showChatBox, setShowChatBox] = useState(false);



  const toggleChatBox = () => {
    setShowChatBox((prevState) => !prevState);
  };


  useEffect(() => {
    const getArticles = async () => {
      const NEWS_API_KEY = '394e91bf55ac4841aa557ce2698a8c64'; // Place your API Key here and make sure to protect it


      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=${NEWS_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.articles);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching news articles: ', error);
     
        setLoading(false);
      }
    };

    getArticles();
  }, []);



  const fetchChartData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
        params: {
          vs_currency: 'usd',
          days: '30',
          interval: 'daily',
        }
      });

      // Process the data to fit recharts' structure for the line chart
      const processedChartData = response.data.prices.map(([date, value]) => ({
        date: new Date(date).toLocaleDateString(),
        price: value,
      }));

      // Inside your existing fetchChartData function, update to fetch current price
const latestPriceData = response.data.prices[response.data.prices.length - 1][1];
setBitcoinPrice(latestPriceData);

      // Process the latest market cap data
      const latestMarketCapData = response.data.market_caps[response.data.market_caps.length - 1][1];

      setChartData(processedChartData);
      setMarketCap(latestMarketCapData);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  // const events = [
  //   {
  //     id: 1,
  //     title: 'Crypto Conference 2024',
  //     description: 'Join us for the biggest crypto conference of the year in kampala Uganda!',
  //     date: 'April 15, 2024',
  //     location: 'Virtual Event',
  //     image: cryptoConferenceImage // Use the imported image
  //   },
  //   {
  //     id: 2,
  //     title: 'Introduction to Blockchain Webinar',
  //     description: 'Learn the basics of blockchain technology in this webinar.',
  //     date: 'May 3, 2024',
  //     location: 'Online',
  //     image: blockchainWebinarImage // Use the imported image
  //   },

  //   {
  //     id: 3,
  //     title: 'Real estate Conference 2024',
  //     description: 'Join us for the biggest crypto conference of the year in kampala!',
  //     date: 'Oct 15, 2024',
  //     location: 'Virtual Event',
  //     image: cryptoImage // Use the imported image
  //   },
  //   // Add more events as needed
  // ];


  const calculateTimeRemaining = (eventDate) => {
    const now = new Date().getTime();
    const eventTime = new Date(eventDate).getTime();
    const timeRemaining = eventTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const formatCountdown = (time) => {
    return `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
  };



  // useEffect(() => {
  //   const updateCountdowns = () => {
  //     const updatedCountdowns = events.map(event => {
  //       const remainingTime = calculateTimeRemaining(event.date);
  //       return {
  //         id: event.id,
  //         countdown: formatCountdown(remainingTime)
  //       };
  //     });
  //     setEventCountdowns(updatedCountdowns);
  //   };

  //   const intervalId = setInterval(updateCountdowns, 1000); // Update countdowns every second

  //   return () => clearInterval(intervalId);
  // }, [events]);



  useEffect(() => {
    fetchChartData();
  }, []);

  // Format the market cap number to a more readable format
  const formatMarketCap = (cap) => {
    if (cap !== null) {
      return `Market Cap: $${cap.toLocaleString()}`;
    }
    return '';
  };


  useEffect(() => {
 
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowCountdown(false);
  };



  const navigateTo = (url) => {
    navigate(url);
  };

  const paragraphs = [
    {
      text: "The U.S. Securities and Exchange Commission (SEC) is investigating the Ethereum Foundation and companies doing business with the nonprofit, according to a new report from Fortune Wednesday. And that’s very bad news for crypto enthusiasts who were hopeful that…",
      image: image3 ,
      link: "https://gizmodo.com/sec-ethereum-price-bitcoin-investigation-crypto-etf-1851352576" ,
      title: "The Feds Are Reportedly Investigating Ethereum Foundation",

    },
    {
      link: "https://arstechnica.com/tech-policy/2024/03/bitcoin-fog-operator-convicted-of-laundering-400m-in-bitcoins-on-darknet/" ,
      title: "Bitcoin Fog operator convicted of laundering $400M in bitcoins on darknet",
      text: "Roman Sterlingov will appeal, denouncing DOJ's crypto-tracing techniques.",
      image: image2 // Use the imported image
    },

    {
      link: "https://africa.businessinsider.com/news/this-guy-is-serious-about-crypto-but-his-joke-character-has-gone-viral/9k83g0d" ,
      title: "This guy is serious about crypto, but his joke character has gone viral",
      text: "Nick O'Neill is serious about crypto. But his joke crypto bro character has helped him go viral, and make money, on Twitter.",
      image: image1 // Use the imported image
    }
  ];
  
  return (
    
    <>
    
    <div className='body2'>
      {isLoading && (
  <div className="loading-container">
        <div className="coming-soon-container">
        <img src={icon4} alt="Icon" className='iconimage22' />
          <span className="loading-dots">Loading...</span>
        </div>
      </div>
      )}
     <NavBar />
     {/* <div className="chart-container"> 

<h2 className="chart-heading">Top Gain Investments</h2>

      <p>Bitcoin: ${bitcoinPrice ? bitcoinPrice.toLocaleString() : 'Loading...'}</p>

      <p className="white-text">{formatMarketCap(marketCap)}</p>
     
      <div style={{ zIndex: 2, position: 'relative' }}>

      <ResponsiveContainer width="104%" height={400} className="bitcoin-chart" style={{ zIndex: 1000, position: 'relative' }}>

        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div> */}
      <section className="header">
   
          
        <div className="header-content">
    <h1 className="welcome-title">
        <span className="green-text">Your Way To The Digital Investment World  </span> 
        <span className="green-text2">Secure and Reliable Investment Company  </span> 
        <p>  Tap Into Unlimited Possibilities In The Digital Space With Phronesis Holdings Your No.1 Digital Asset Investment and Management Company</p>
    </h1>
   

<button className="enterbtn" onClick={openForm}>Contact Us</button>


<div className="follow-us-container">
        <h2>Follow Us:</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className='socialimage'/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className='socialimagei'/>
          </a>
          <a href="https://t.me/Phronesis14" target="_blank" rel="noopener noreferrer">
            <img src={TelegramIcon} alt="Telegram" className='socialimaget'/>
          </a>
        </div>
      </div>
        </div>


        <div className="image55container">

    {/* First image */}
    <div className="image55wrapper" onClick={() => navigate('/cryptoa')}>
      <img src={FirstImage} alt="FirstImage" className="zoom55image"/>
      <h3 className="image55overlay">CryptoCurrencies</h3>
    </div>
    {/* Second image */}
    <div className="image55wrapper" onClick={() => navigate('/metaa')}>
      <img src={SecondImage} alt="SecondImage" className="zoom55image"/>
      <h3 className="image55overlay">Metaverse</h3>
    </div>
    {/* Third image */}
    <div className="image55wrapper" onClick={() => navigate('/aia')}>
      <img src={ThirdImage} alt="ThirdImage" className="zoom55image"/>
      <h3 className="image55overlay">Artificial Intelligence</h3>
    </div>
  </div>
        
      
      </section>
{/* 
      <div
    className="chatbox"
    style={{
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      zIndex: 1000,
    }}
  ></div> */}
{/* 
<button
         className="support-button"
         onClick={toggleChatBox}
         style={{
           position: 'fixed',
           right: 20,
           bottom: 20,
           zIndex: 1000,
           backgroundColor: 'transparent', // Make background transparent
           border: '1px solid white', // Add white border
           color: 'white', // Set text color to white
           borderRadius: '5px', // Add border radius
           padding: '8px 15px', // Add padding
           cursor: 'pointer', // Change cursor to pointer
           display: 'flex', // Align items in a row
           alignItems: 'center', // Align items vertically
                }}
      >
        {showChatBox ? 'Close Chat' : 'Support'}
     
        <img
          src={sicon} // Replace with your support icon path
          alt="Support"
          style={{ marginLeft: '7px', width: '20px', marginBottom: '2%', height: '20px' }} // Adjust icon size
          />
      </button> */}

   
      {/* {showChatBox && (
        <div
          className="chat-box"
          style={{
            position: 'fixed',
            right: 20,
            bottom: 60,
            zIndex: 1000,
            width: '20%',
             height: '50%' ,
            backgroundColor: 'white', // Add background color for chat box
            padding: '10px', // Add padding for chat box
            borderRadius: '5px', // Add border radius for chat box
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add box shadow for chat box
          }}
        >
          <ChatBox />
        </div>
      )} */}




    


      <section className='spartnership-section'>
        <h2 className='h2anomation'>Invest In</h2>
        <div className="animated-words">
        <div className="word" onClick={() => navigateTo('/cryptoa')}>
                          <img src={IconImage1} alt="Icon" className="word-icon" />
                <h2>Cryptocurrencies</h2>
                <div className="paragraph-container">
                    <p> we offer unique opportunities to invest in the dynamic world of cryptocurrencies.</p>
                </div>
            </div>
            <div className="word" onClick={() => navigateTo('/aia')}>
                          <img src={IconImage2} alt="Icon" className="word-icon" />
                <h2>Artificial Intelligence</h2>
                <div className="paragraph-container">
                    <p>Explore investment opportunities in the cutting-edge field of Artificial Intelligence. </p>
                </div>
            </div>
            <div className="word" onClick={() => navigateTo('/metaa')}>
                          <img src={IconImage3} alt="Icon" className="word-icon" />
                <h2>Metaverse</h2>
                <div className="paragraph-container">
                    <p>Enter the Metaverse with strategic investments. A new frontier of digital experience</p>
                </div>
            </div>
        </div>
      </section>
      <section className="section5">
        <h2>Services</h2>

        <div className="row"> {/* First row */}
   
        <div className="crypto-section-container188">
          <img src={advisoryIcon} alt="Second" className='serimage' />
          <h3>Digital Asset Investment</h3>
          <p>  Phronesis Holdings helps you invest in our top 30 best performing digital assets based on
          our research and strong beliefs we have in those specific assets. With over hundreds of
          thousands of crypto assets, we pick what we call our top 30 best digital assets where we
          invest our clients' money and we can rest assured of its growth and performance
          throughout the time we have to hold the investors' assets or investments.
 </p>
 <p>
          With our cutting-edge technology and a great team of experts and analysts in the crypto
          market, we select the right assets we have built confidence in based on many
          fundamentals and strong reasons for us to consider those assets as the best to HOLD our
          assets in.
        </p>
        <a href="#" onClick={() => navigate('/digital-asset-investment')} className="blue-button">Learn More</a>

        </div>
   
      <div className="crypto-section-container188"> {/* Second row */}
        <div className="column">
          <img src={assetIcon} alt="Third"  className='serimage'/>
          <h3>Digital Asset Management</h3>
          <p> After many years around the digital market, our team put together their mind and
          designed an excellent way we will help manage digital assets for our dear clients. We
          provide access to monitoring the performance of client’s assets. Here a client with the help
          of our tools, they are able to know how their assets are performing.
     </p>
     <a href="#" onClick={() => navigate('/digital-asset-management')} className="blue-button">Learn More</a>
     </div>
        </div>
        <div className="crypto-section-container188">
          <img src={infrastructureIcon} alt="Fourth" className='serimage'/>
          <h3>Advisory & Consultancy On Digital Asset Investment</h3>
          <p>    As a top digital asset investment & management company, we offer deep
          knowledge and understanding around the crypto market. Our team of experts in the
          industry are available to provide advisory support and consultation inline with digital
          space.</p>
          <a href="#" onClick={() => navigate(' /advisory-and-consultancy')} className="blue-button">Learn More</a>
        </div>
      
      </div>
      <button className="advisor-button" onClick={openForm}>Speak with Our Advisor</button>
  
      </section>    
    

      <section className="henosis-investment-group">
      <div className="content">
      <h1>HENOSIS INVESTMENT GROUP (HIG)</h1>
      <img src={heno} alt="heno Image" className='image776'/>

        <div className="text">
        
          <p>An Exclusive Club Of HIGH NET WORTH WEALTH INDIVIDUALS (HNWWI).</p>
          <p>
            Henosis Investment Group is a subsidiary of PHRONESIS HOLDINGS. Made of HNWI with
            big investment entry in PHRONESIS HOLDINGS. Being a member of HIG comes with an
            extra privileges. You get an opportunity to participate in any available opportunities in
            this digital space once it's found by the team of experts. Get an exclusive personalized
            market research and data on what is happening all around the world in this crypto world,
            blockchain, metaverse, AI, NFT world, DeFi, DAO etc.
          </p>
          <p>
            Being a member or part of Henosis Investment Group comes with a lot of advantages.
          </p>
          <p>
            The Group will emerge at a later stage to give an opportunity to its members to invest in
            real-time assets with the help of its partners.
          </p>
          <button className="advisor-button2" onClick={openForm}>Join Henosis</button>

        </div>
       
      </div>
    </section>

{/* 
    <section className="events-section">
        <h2>Events & Webinars</h2>
        <div className="events-container">
          {events.map((event, index) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <div className="countdown-container">
         
                  <p className="countdown">{eventCountdowns[index]?.countdown}</p>
                </div>
                <p>Location: {event.location}</p>
              </div>
            </div>
          ))}
          {events.length === 0 && <p>No events available</p>}
        </div>
      </section> */}

      {/* <section className="partnership-section">
   
   
        <div className="container33">
        <h2 style={{ color: 'blue' }}>Your Gateway To Digital Finance</h2>
        <p>Comprehensive solutions sculptured by pioneering experts to maximize your potential</p>
      <div className="row"> 
        <div className="column">
          <img src={premiumIcon} alt="First" />
          <p>Premium Digital Wealth Management</p>
        </div>
        <div className="column">
          <img src={advisoryIcon} alt="Second" />
          <p>Asset Management</p>
        </div>
      </div>
      <div className="row"> 
        <div className="column">
          <img src={assetIcon} alt="Third" />
          <p>Advisory, Liquidity, Investments & Research</p>
        </div>
        <div className="column">
          <img src={infrastructureIcon} alt="Fourth" />
          <p>infrastructure</p>
        </div>
      </div>
      <button className="advisor-button" onClick={openForm}>Speak with Our Advisor</button>

    </div>
      </section> */}
      {/* <section className="partnership-section glass">

         </section> */}


         {/* <section className="news-section">
      {loading && <p>Loading news...</p>}
     
      {!loading  && (
   
   <div className="newsfeacontainer">
   <div className="featured-article">
     {articles.length > 0 && (
       <div>
         <h2>{articles[0].title}</h2>
         <img src={articles[0].urlToImage} alt={articles[0].title} />
         <p>{articles[0].description}</p>
         <a href={articles[0].url} target="_blank" rel="noopener noreferrer">Read more</a>
       </div>
     )}
   </div>
          <div className="small-articles">
            {articles.slice(1, 4).map((article, index) => (
              <div key={index} className="small-article">
                <h3>{article.title}</h3>
                <img src={article.urlToImage} alt={article.title} />
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </div>
        </div>
      )}
 

    </section>*/}
   
     {/* <section className="news-section">
     <div class="news-sectionh">
  <h2>News</h2>
</div>

      <div className="newsfeacontainer">
        
        <div className="featured-article">
          <h2>The Science of Crypto Forensics Survives a Court Battle—for Now</h2>
          <img src={image33} className='' />
          <p>A jury convicted Roman Sterlingov of money laundering this month. His defense team says it will appeal, saying the crypto-tracing technique at the heart of the case is “pseudoscience.”</p>
          <a href="https://www.wired.com/story/the-science-of-crypto-forensics-court-battle/" target="_blank" rel="noopener noreferrer" className="blue-button">Read more</a>

        </div>
        <div className="small-articles">
        {paragraphs.map((paragraph, index) => (
  <div key={index} className="small-article">
    <h3>{paragraph.title}</h3>
    <img src={paragraph.image} alt={`Image ${index + 1}`} />
    <p>{paragraph.text}</p>
    <a href={paragraph.link} target="_blank" rel="noopener noreferrer" className="blue-button">Read more</a>
  </div>
))}

        </div>
      </div>
    </section> */}
{/* 
<section className="news-section">
  {loading && <p>Loading news...</p>}
  {!loading && (
    <div className="newsfeacontainer">
      <div className="featured-article">
        {articles.length > 0 && (
          <div>
            <h2>{articles[0].title}</h2>
            <img src={articles[0].urlToImage} alt={articles[0].title} />
            <p>{articles[0].description}</p>
            <a href={articles[0].url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        )}
      </div>
      <div className="small-articles">
        {articles.slice(1, 4).map((article, index) => (
          <div key={index} className="small-article">
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt={article.title} />
            <p>
              <img src={article.urlToImage} alt={article.title} />
              {article.description}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  )}
</section> */}

      <>
  
      <ContactForm isVisible={isFormVisible} onClose={closeForm} />
    </>
			{/* <section className="section5">
        <h2>Why Phronesis Holds</h2>
        <p>Your bridge between traditional and digital finance</p>
        <div className="row">
        <div className="column">
          <img src={premiumIcon} alt="First" />
          <h3>Investing in digital assets</h3>
          <p>Trusted by top-tier institutional and individual investors, Amber Premium offers bespoke digital assets investment and portfolio management solutions catered to clients' specific needs.</p>
        </div>
        <div className="column">
          <img src={advisoryIcon} alt="Second" />
          <h3>Institutional-grade digital asset management</h3>
          <p>Amber boasts an expansive and exceptionally skilled trading team, recognized as one of the largest and most proficient in the industry. Through in-depth market analysis and quantitative strategies, we help clients capitalize on opportunities to achieve stable growth of their crypto holdings.</p>
        </div>
      </div>
      <div className="row"> 
        <div className="column">
          <img src={assetIcon} alt="Third" />
          <h3>Accessing more liquidity</h3>
          <p>As a top liquidity provider, Amber provides liquidity solutions to leading projects and institutions globally. Enjoy best-in-class trading execution to adapt quickly to market shifts at minimal cost.</p>
        </div>
        <div className="column">
          <img src={infrastructureIcon} alt="Fourth" />
          <h3>Robust crypto infrastructure support</h3>
          <p>Amber provides scalable, all-in-one infrastructure solutions to power the growth of digital businesses. Our reliable and customizable infrastructure support enables clients to focus on core product development while meeting dynamic computing needs.</p>
        </div>
      </div>

      </section> */}

      {/* <section className="section6">
      <h2>Commitment To Excellence</h2>
    

      </section> */}

 
{/* 
      <section className="section7">
      <div className="content-container">
        <h2 className="subtitle">Phronesis Hub</h2>
        <h1 className="title">Phronesis Labs</h1>
        <p className="description">
          Our Research & Investment team Phronesis Labs focuses on primary market research and investment in the Crypto field. We selectively invest in leading projects across different tracks within Crypto, connecting to global markets and empowering industry development.
        </p>
        <button className="read-more-btn">Read more</button>
      </div>
    </section> */}

  

<Footer />
</div>
    </>
  );
};

export default Homepage;
      