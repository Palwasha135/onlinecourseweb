import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <section>
  <div >
    <Image className="top-0 w-full object-cover h-28 md:h-28  opacity-5 relative" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbF0HZxZ2ivHlYYs-VYEmG4zPs1GmbTnaog&usqp=CAU'} alt=" " width={300} height={40}/>
  
  <h1 className="absolute top-20  text-3xl md:text-5xl font-semibold text-red-400 ">Contact Us</h1></div>
</section>
      <div className="bg-white px-6 py-3  lg:px-8">
  <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Send Us Your Query</h1>
    </div>
  <form className="mx-auto md:mt-6 max-w-xl xs:mt-2">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
       
        <div className="mt-2.5">
          <input required  type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Your First Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
   
        <div className="mt-2.5">
          <input required  type="text" name="last-name" id="last-name" autoComplete="family-name" placeholder="Your Last Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        
       
      </div>
      <div className="sm:col-span-2">

        <div className="mt-2.5">
          <input required type="email" name="email" id="email" autoComplete="email" placeholder="Your Email Address" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
      
        <div className="mt-2.5 ">
          <input required type="tel" name="phone" id="phone" autoComplete="tel" placeholder="Your Phone Number" className="cursor-pointer block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
      <div className="mt-2.5">
          <input required type="text" name="subject" id="subject" autoComplete="subject" placeholder="Type your subject " className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows={4} placeholder="Enter details here..." className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
        </div>
       
      </div>
    </div>
    <div className="mt-3">
      <button type="submit" className="bg-red-500 text-white rounded-sm py-2 w-full block mb-9">Submit →</button>
    </div>
  </form>
</div>

    </div>
  )
}

export default page
