import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Homepage  from './Homepage';
import AboutPhronesisHoldings from './AboutPhronesisHoldings';
import DigitalAssetInvestment from './DigitalAssetInvestment';
import DigitalAssetManagement from './DigitalAssetManagement'; // Adjust path as needed
import AdvisoryAndConsultancy from './AdvisoryAndConsultancy'; // Import the new component

import Metaaa from './metaa'; // Import the new component

import Cryptoaa from './cryptoa.js'; // Import the new component
import Aiaa from './aia.js'; // Import the new component

import Henos from './Henosis';




// import HamburgerMenu from './HumburgerMenu';

import './App.css';

function App() {
  return (
    
    <Router>
      <div className="App">
    
     
        {/* <HamburgerMenu /> */} 
        <Routes>
          <Route path="/" element={<Homepage />} />
               <Route path="/about-us" element={<AboutPhronesisHoldings />} />
               <Route path="/digital-asset-investment" element={<DigitalAssetInvestment />} />
               <Route path="/digital-asset-management" element={<DigitalAssetManagement />} />
               <Route path="/advisory-and-consultancy" element={<AdvisoryAndConsultancy />} />
      
               <Route path="/metaa" element={<Metaaa />} />
               <Route path="/cryptoa" element={<Cryptoaa />} />
               <Route path="/aia" element={<Aiaa />} />
      

               
               <Route path="/Henosis" element={<Henos />} />
      
     

          </Routes>
          
      </div>
    </Router>
  );
}

export default App;
