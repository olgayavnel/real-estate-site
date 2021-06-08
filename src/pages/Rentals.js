import React from 'react';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';

function Rentals() {
  return <Hero slides={SliderData} />;
}

export default Rentals;
