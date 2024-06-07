import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
 
  return (
    <div className="bg-black  pb-9">
       <div className="flex flex-col text-center w-full mb-20">
           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#ff3300ee]">Our Courses</h1>
           <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">Favorite Topics To Learn</h1>
         </div>
      <div className="flex mx-auto justify-around pt-4   ">
        <div className="grid  sm:grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="mx-3">
 
            <Link href={"/Animationcourse"} className="text-white  ">
            <div className=" max-w-sm shadow-md rounded-md  border-4 border-red-600 ">
              
              <Image
                src={"/images/animationimg.jpg"}
                alt=""
                width={380}
                height={100}
                className="items-center mx-auto  hover:scale-75   "
              />    
              <div className="md:py-7 lg:py-6 p-3 font-medium">
                <h4>Animation</h4>
              </div>
              <hr className="text-gray-500" />
              <div className="py-3 p-3">
                
                  View Details
              </div>   </div>
              </Link>
              
           
          </div>
      <Link href={"/Graphiccourse"} className="text-white "> 
        <div className="mx-3">
            <div className=" max-w-sm shadow-md rounded-md   border-4 border-red-600 ">
              <Image
                src={"/images/graphicimg.jpg"}
                alt=""
                width={380}
                height={100}
                className=" hover:scale-75 "
              />
              <div className="py-8 p-3 font-medium">
                <h4>Graphic Design</h4>
              </div>
              <hr className="text-gray-500" />
              <div className="py-3 p-3">
                
                  View Details
               
              </div>
            </div>
          </div> </Link>
          <Link href={"/Videoeditingcourse"} className="text-white  ">
          <div className="mx-3">
            <div className=" max-w-sm shadow-md rounded-md  xs:mb-2  border-4 border-red-600">
              <Image
                src={"/images/videoeditingimg.jpg"}
                alt=""
                width={500}
                height={100}
                className=" hover:scale-75   "
              />
              <div className="py-8 p-3 font-medium">
                <h4>Video Editing</h4>
              </div>
              <hr className="text-gray-500" />
              <div className="py-4 p-3">
               
                  View Details

              </div>
            </div>
          </div>               
           </Link>

        </div>
      </div>
    </div>
  );
};

export default page;

