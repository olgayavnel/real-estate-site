import React from 'react';
import Listings from '../components/Listings';
import { ListingsData } from '../data/ListingsData';

function Homes() {
  return <Listings {...ListingsData} />;
}

export default Homes;
