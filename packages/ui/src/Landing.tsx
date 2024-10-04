
import React from 'react';
import { Appbar } from './Appbar';
import { Hero } from './Hero';
import { Languages } from './Languages';
import { Footer } from './Footer';

export const  Landing =  () => {
  return (
    <div>
      <Appbar />
      <Hero />
      <Languages />
      <Footer />
    </div>
  );
};

