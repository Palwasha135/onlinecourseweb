import React from 'react';
import Image from 'next/image';
import { SquarePlay } from 'lucide-react';
import { Globe } from 'lucide-react';


const Section = () => {
  return (
    <section className="text-white body-font pt-16 bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            src="/images/img3.png"
            alt="Hero"
            width={720}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="flex items-center mb-6">
            <h1 className="mr-2 text-xl text-white ">Why Choose</h1>
            <Image src="/images/logo2.PNG" alt="Logo" width={100} height={100} />
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-Poppins font-medium text-white">
          Develop Your <span className='text-[#ff3300ee]'>Skills,</span> Learn Something <span className='text-[#ff3300ee]'>New,</span> and<span className='text-[#ff3300ee]'> Grow</span>  Your Skills From Anywhere in the 
         
         <span className='text-[#ff3300ee]'>World!</span> 
          </h1>
          <p className="mb-8 leading-relaxed">
           We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!​
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
  {/* First row, first column */}
  <div className="flex space-x-6 items-center justify-center">
    <div className="flex items-center justify-center bg-orange-50 border border-[#ff3300ee] rounded-full p-4 shadow-slate-900 shadow-2xl">
      
      <Image src="/images/instructor3.png" alt="instructor" width={80} height={80} />
    </div>
    <div>
      <h1 className='text-2xl text-[#ff3300ee] font-medium font-Poppins'>Expert Instructors</h1>
      <h2>There are many variations of passages of<br/> the Lorem Ipsum available.</h2>
    </div>
  </div>

  {/* First row, second column */}
  <div className="flex space-x-2 items-center justify-center">
    <div className="flex items-center justify-center bg-orange-50 border border-[#ff3300ee] rounded-full p-4 shadow-slate-900 shadow-2xl">
    
      <Image src="/images/clock.png" alt="clock" width={80} height={80} />
    </div>
    <div>
      <h1 className='text-2xl text-[#ff3300ee] font-medium font-Poppins'>Lifetime Access</h1>
      <h2>There are many variations of passages of<br/> the Lorem Ipsum available.</h2>
    </div>
  </div>

  {/* Second row, first column */}
  <div className="flex space-x-2 items-center justify-center">
    <div className="flex items-center justify-center bg-orange-50 border border-[#ff3300ee] rounded-full p-4 shadow-slate-900 shadow-2xl">
    
      <Image src="/images/remote2.png" alt="remote" width={80} height={80} />
    </div>
    <div>
      <h1 className='text-2xl text-[#ff3300ee] font-medium font-Poppins'>Remote Learning</h1>
      <h2>There are many variations of passages of<br/> the Lorem Ipsum available.</h2>
    </div>
  </div>

  {/* Second row, second column */}
  <div className="flex space-x-2 items-center justify-center">
    <div className="flex items-center justify-center bg-orange-50 border border-[#ff3300ee] rounded-full p-4 shadow-slate-900 shadow-2xl">
    
      <Image src="/images/growth.png" alt="growth" width={80} height={80} />
    </div>
    <div>
      <h1 className='text-2xl text-[#ff3300ee] font-medium font-Poppins'>Self Development</h1>
      <h2>There are many variations of passages of<br/> the Lorem Ipsum available.</h2>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Section;



