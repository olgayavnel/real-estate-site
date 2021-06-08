import React from 'react';
import { FeaturesData } from '../data/FeaturesData';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import { ListingsData } from '../data/ListingsData';
import { SliderData } from '../data/SliderData';
import Features from '../components/Features';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Listings from '../components/Listings';

function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings {...ListingsData} />
      <Features {...FeaturesData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default Home;
