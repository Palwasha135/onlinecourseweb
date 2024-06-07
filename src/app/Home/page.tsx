import React from 'react';
import Hero from '../Components/Hero';
import Section1 from '../Components/Section1';
// import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Courses from '../Courses/page'


const Page = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Section1 />
      <Section3 />
    {/* <Courses/> */}

    
    </div>
  );
};

export default Page;
