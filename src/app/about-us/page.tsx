// import React from 'react';
// import Image from 'next/image';
// import { SquarePlay } from 'lucide-react';
// import { Globe } from 'lucide-react';
// import { Lightbulb } from 'lucide-react';
// import { Target } from 'lucide-react';


// const About = () => {
//   return (
//     <section className="text-gray-600 body-font mt-16">
//       <div className="container mx-auto flex space-x-16 px-5 py-24 md:flex-row flex-col items-center">
        
//         <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//           <div className="flex items-center mb-5">
//             <h1 className="mr-2 text-xl text-black ">About</h1>
//             <Image src="/images/logo2.PNG" alt="Logo" width={100} height={100} />
//           </div>
//           <h1 className="title-font sm:text-4xl text-3xl mb-6 font-Poppins font-medium text-gray-900">
//            The Place Where You Can
//            <br/>
//          <span className='text-[#ff3300ee]'> Achieve</span> 
//           </h1>
//           <p className="mb-8 leading-relaxed">
//             Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
//           </p>
//           <div className='flex flex-col space-y-4'>
//             <div className="flex space-x-6 items-center justify-center">
//             <div className="flex items-center justify-center bg-white rounded-full p-4 shadow-slate-500 shadow-2xl">
//              {/* <Lightbulb className="text-[#ff3300ee] h-16 w-16" /> */}
//               <Image src="/images/bulb.png" alt="Logo" width={50} height={30} />
//              </div>
//              <div>
//                <h1 className='text-2xl text-black font-medium font-Poppins'>Our Mission</h1>
//              <h2>There are many variations of passages of<br/> the Lorem Ipsum available.</h2>
//                 </div>
//                      </div>
//                       <div className="flex space-x-6 items-center justify-center">
//             <div className="flex items-center justify-center bg-white rounded-full shadow-slate-500 p-4 shadow-2xl">
//              <Target  className="text-blue-400 h-16 w-16" />
//              </div>
//              <div>
//                <h1 className='text-2xl text-black font-medium font-Poppins'>
// Our Vision</h1>
//              <h2>There are many variations of passages of<br/> the Lorem Ipsum available.</h2>
//                 </div>
//                      </div>

//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//           <Image
//             className="object-cover object-center rounded"
//             src="/images/about1.png"
//             alt="about1"
//             width={720}
//             height={600}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from 'react';
import Image from 'next/image';
import { Target } from 'lucide-react';

const About = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container mx-auto flex space-x-16 px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="flex items-center mb-5">
            <h1 className="mr-2 text-xl text-white">About</h1>
            <Image src="/images/logo2.PNG" alt="Logo" width={100} height={100} />
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-Poppins font-medium text-white">
            The Place Where You Can
            <br />
            <span className='text-[#ff3300ee]'> Achieve</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className='flex flex-col space-y-4'>
            <div className="flex space-x-6 items-center justify-center">
              <div className="flex items-center justify-center bg-white rounded-full p-4 shadow-slate-700 shadow-2xl">
                <Image src="/images/bulb.png" alt="Logo" width={50} height={30} />
              </div>
              <div>
                <h1 className='text-2xl text-black font-medium font-Poppins'>Our Mission</h1>
                <h2>There are many variations of passages of<br /> the Lorem Ipsum available.</h2>
              </div>
            </div>
            <div className="flex space-x-6 items-center justify-center">
              <div className="flex items-center justify-center bg-white rounded-full shadow-slate-700 p-4 shadow-2xl">
                <Target className="text-blue-400 h-16 w-16" />
              </div>
              <div>
                <h1 className='text-2xl text-black font-medium font-Poppins'>Our Vision</h1>
                <h2>There are many variations of passages of<br /> the Lorem Ipsum available.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            src="/images/about1.png"
            alt="about1"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
