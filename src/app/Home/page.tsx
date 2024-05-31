import React from 'react';
import Hero from '../Components/Hero';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';



const Page = () => {
  return (
    <div className='overflow-x-auto'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    
    </div>
  );
};

export default Page;
