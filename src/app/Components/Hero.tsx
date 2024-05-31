import React from 'react';
import Image from 'next/image';
import { Phone, Mail, CircleHelp } from 'lucide-react';

const Page = () => {
  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="icon-bar">
        <a href="#" className="phone"><Phone /> <span className='phone-number'>0123456789</span></a>
        <a href="#" className="mail"><Mail /><span className='email-id'>abc@gmail.com</span></a>
        <a href="#" className="help"><CircleHelp /><span className='any-help'>have any question?</span></a>
      </div>
      <div className="flex flex-col bg-black md:flex-row space-y-10 md:space-y-0 md:space-x-10 p-6 md:p-12">
        <div className="text-content mt-28 md:ml-28">
          <h1 className="text-2xl sm:text-center md:text-4xl text-white font-Poppins font-bold mb-4 animate-slide-in-top">
            Welcome to <span className='text-[#ff3300ee]'>Graphics</span> Review
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white animate-slide-in-left">
            Grahphic review Training Program has been launched with<br />
            <span className='text-[#ff3300ee]'>0 New Advance Courses</span> aimed at equipping our Youth,<br />
            Freelancers, Students and Women.
          </p>
          <a href="#learn-more" className="bg-[#ff3300ee] hover:bg-white text-white text-lg md:text-2xl hover:text-[#ff0000c0] font-bold py-2 md:py-4 px-4 md:px-8 ml-10 md:ml-32 rounded-full animate-slide-in-bottom">
            Join Now
          </a>
        </div>
        <div className="image-content">
          <Image src="/images/hero7.png" alt="Hero" className='md:mt-20' width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Page;






