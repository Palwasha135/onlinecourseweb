import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
   <section className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-start w-full mb-20">
     
      <div className=' mx-auto '>
         <h1 className=" text-base font-medium title-font mb-4 mx-auto text-[#ff3300ee]">what we do ____</h1>
         <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">How it works</h1>
         <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem debitis impedit,<br/> aperiam, illo aliquam, velit ipsa fugit quibusdam perferendis minus iusto<br/> nobis optio quis alias reprehenderit saepe labore neque!</p>
      </div>
     
    </div>
    <div className="flex flex-wrap -m-4 text-center p-8">
      {/* card 1 */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center "style={{ boxShadow: "10px 10px red" }}>
           <Image src="/images/signup.png" alt="signup" width={100} height={100} className="mx-auto"/>
          <h2 className="title-font font-medium text-2xl text-white mt-5">Fill the Form</h2>
          
        </div>
      </div>
      {/* card 2 */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center"style={{ boxShadow: "10px 10px red" }}>
        <Image src="/images/course.png" alt="course" width={100} height={100} className="mx-auto"/>
          <h2 className="title-font font-medium text-2xl text-white mt-5">Select Course</h2>
          
        </div>
      </div>
      {/* card 3 */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center "style={{ boxShadow: "10px 10px red" }}>
           <Image src="/images/learning.png" alt="learning" width={100} height={100} className="mx-auto"/>
          <h2 className="title-font font-medium text-2xl text-white mt-5">Start Learning</h2>
        
        </div>
      </div>
      {/* card 4 */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:underline hover:underline-offset-8 decoration-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center" style={{ boxShadow: "10px 10px red" }}>
          <Image src="/images/certificate.png" alt="certificate" width={100} height={100} className="mx-auto"/>
          <h2 className="title-font font-medium text-2xl text-white mt-5">Get certificate</h2>
          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Section3

