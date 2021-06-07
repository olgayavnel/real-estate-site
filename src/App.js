import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData, InfoDataTwo } from './data/InfoData';
import { ListingsData } from './data/ListingsData';
import Listings from './components/Listings';
import Features from './components/Features';
import { FeaturesData } from './data/FeaturesData';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings {...ListingsData} />
      <Features {...FeaturesData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
