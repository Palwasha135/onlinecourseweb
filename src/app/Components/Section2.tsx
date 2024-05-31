'use client'
import React from 'react';
import Image from 'next/image';

const Section3 = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#ff3300ee]">Our Courses</h1>
          <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">Favorite Topics To Learn</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center p-8">
          {/* card 1 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
            <div className="border-8 border-[#ff3300ee] px-4 py-6 md:rounded-l-3xl sm:rounded-t-lg text-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src="/images/graphic.png" alt="graphic" width={100} height={100} className="mx-auto"/>
                  </div>
                  <div className="flip-card-back">
                    <Image src="/images/graphic.png" alt="graphic" width={100} height={100} className="mx-auto"/>
                  </div>
                </div>
              </div>
              <h2 className="title-font font-medium text-3xl text-white mt-5 ">Graphic Design</h2>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
            <div className="border-8 border-[#ff3300ee] px-4 py-6 rounded-lg text-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src="/images/logocourse.png" alt="logocourse" width={100} height={100} className="mx-auto"/>
                  </div>
                  <div className="flip-card-back">
                    <Image src="/images/logocourse.png" alt="logocourse" width={100} height={100} className="mx-auto"/>
                  </div>
                </div>
              </div>
              <h2 className="title-font font-medium text-3xl text-white mt-5 ">Logo Design</h2>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
            <div className="border-8 border-[#ff3300ee] px-4 py-6 rounded-lg text-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src="/images/motion.png" alt="motion" width={100} height={100} className="mx-auto"/>
                  </div>
                  <div className="flip-card-back">
                    <Image src="/images/motion.png" alt="motion" width={100} height={100} className="mx-auto"/>
                  </div>
                </div>
              </div>
              <h2 className="title-font font-medium text-3xl text-white mt-5 ">Animation</h2>
            </div>
          </div>
          {/* card 4 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
            <div className="border-8 border-[#ff3300ee] px-4 py-6 md:rounded-r-3xl sm:rounded-b-lg text-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src="/images/editing.png" alt="vedio" width={100} height={100} className="mx-auto"/>
                  </div>
                  <div className="flip-card-back">
                    <Image src="/images/editing.png" alt="vedio" width={100} height={100} className="mx-auto"/>
                  </div>
                </div>
              </div>
              <h2 className="title-font font-medium text-3xl text-white mt-5 ">Video Editing</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;


