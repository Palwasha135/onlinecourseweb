import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuClock9 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCertificate } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";

const page = () => {
  return (
    <div className=" overflow-hidden mb-9">
      
      <section>
  <div className="relative">
    <Image className="top-0 w-full object-cover h-32 md:h-52 opacity-40" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGpYzfIx3hhPf03eCHxW16H7icTZZKc7sjg&s'} alt=" " width={300} height={40}/>
    <h1 className="absolute top-10 left-10 text-3xl md:text-5xl font-semibold text-red-400">Graphic Design</h1>
  </div>
</section>
<div className="pt-7">
<div className="mx-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">



        <section className="w-full">
        
          <iframe 
     className="w-full xs:h-60  sm:h-96 "
            src="https://www.youtube.com/embed/pFNCGwBzB3E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="">
            <h1 className=" text-xl font-semibold p-2">About</h1>
            <p className="text-sm p-2">
              Graphic Design, also known as communication design, is the art and
              practice of planning and projecting ideas and experiences with
              visual and textual content. This course is focused on both
              theoretical and practical parts. The aim of the course is to
              develop design sense in trainees by the help of theoretical
              concepts and practice. The focus of practical part will be on
              designing software e.g. Adobe Photoshop and Illustrator. Different
              exercises related to online market requirements will be assigned
              to the trainees. So that they can work professionally in online
              market.
            </p>
          </div>
          <div className="sm:flex  ">
          <div className="pt-7  ">
              <div className="image  mx-auto  xs:w-56   ">
                <Image
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRa1aKLZ68c7NWAdts0brc9E8R4fYg9wH6rEU_ZtMqTQpI2wq3X"
                  width={200}
                  height={70}
                  alt="instructor"
                 
                />
              </div>
            </div>
            <div className="sm:m-5 md:m-8 ">
              <div className="text">
                <h2 className="my-3 font-bold text-xl  sm:text-2xl ">
                  Rafay Anwer Siddiqi{" "}
                  <span className=" font-normal">
                    (Bachelor in Communication Design with Distinction)
                  </span>
                </h2>
                <p className="text-gray-700 text-sm ">
                  Mr Rafay is an accomplished multi-versed Creative Director
                  working for over two decades in the Creative media industry in
                  Pakistan and outside Pakistan. He graduated from NCA, Lahore,
                  in the Communication Design department (2003). He has done FA
                  in fine arts from Government University College, Lahore, and
                  started gaining Professional experience right after his Matric
                  exams (1996).
                </p><br/>
                       <p className="text-gray-700 text-sm ">
                  During the early learning stage, he produced animated works
                  and client storyboards. His professional career started in
                  media and advertising design. He joined a Lahore-based Tech
                  company as a Multimedia Designer. Moving on from there, he
                  joined the Broadcast Design industry as a Creative Coordinator
                  at Express News TV. He produced many Virtual sets, Graphics,
                  Documentaries, In-house packages, and Motion graphics there.
                  Then he joined a Lifestyle based company as a Creative Head in
                  Islamabad. </p><br/>
                         <p className="text-gray-700 text-sm ">
                    After spending years in Print design, Illustration,
                    Photography, Videography, Digital and Web design, UI design,
                    2D animation, and motion graphics, he joined a Game-based
                    company, Game chefs, where he produced 20 plus titles as a
                    Game Designer. He has produced 2D animated series for the
                    children at Dot Republic Media.
                  </p>
               
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto lg:pt-10 pt-4 w-4/5 md:w-3/5">
  <div className="md:justify-start shadow-md rounded-md p-2 bg-gray-100 mb-4 md:mb-0">
    <ul className="leading-10">
              
              <li className=" flex gap-3">
                <LuClock9 className=" my-3 " />
                <strong>
                  Time duration:<span className=" font-normal">12 Weeks</span>
                </strong>
              </li>
              <hr className=" bg-gray-300 h-1" />
              <li className="flex gap-3">
                <SlCalender className=" my-3 " />
                <strong>
                  Videos Duration:
                  <span className=" font-normal">24 hours</span>
                </strong>
              </li>
              <hr className=" bg-gray-300 h-1" />
              <li className="flex gap-3">
                <FaYoutube className=" my-3 " />
                <strong>
                  Start Date:
                  <span className=" font-normal">25 Mar 2024</span>
                </strong>
              </li>
              <hr className=" bg-gray-300 h-1" />
              <li className="flex gap-3">
                <RiMoneyDollarCircleLine className=" my-3 " />
                <strong>
                  Fee: <span className=" font-normal"> Free of Cost</span>
                </strong>
              </li>
              <hr className=" bg-gray-300 h-1" />
              <li className="flex gap-3">
                <IoPersonOutline className=" my-3 " />
                <strong>
                  Who can Join:
                  <span className=" font-normal">
                    Anyone having basic IT Knowledge
                  </span>
                </strong>
              </li>
              <hr className=" bg-gray-300 h-1" />
              <li className="flex gap-3">
                <FaCertificate className=" my-3 " />
                <strong>
                  Enrolled Trainees:
                  <span className=" font-normal">26400</span>
                </strong>
              </li>
              <hr className=" bg-gray-300 h-1" />
              <li className="flex gap-3 ">
                <IoVideocam className=" my-3 " />
                <strong>
                  Video Medium:
                  <span className=" font-normal"> Urdu & English</span>
                </strong>
              </li>
              <Link href={"https://forms.gle/58v2ZGXrvgKFtqAc7"} target="blank">
                <button className="bg-red-600 text-white w-full">
                  {" "}
                  Join Now
                </button>
              </Link>
            </ul>
          </div>

          <div className="flex gap-2 md:mt-9">
  <div className="hidden lg:block border-l-2 lg:h-96 border-gray-400 my-auto"></div>
  <ul className="md:leading-10 s p-3">
    <h1 className="font-bold text-xl pt-4">What you will learn</h1>
    <strong>
      After completing this course, trainees will be able to:-
    </strong>
    
    <li className="list-disc  ">Present ideas\illustrations using the basic concepts of Design.</li>
    <li className="list-disc ">Understand the basics of Filming and Framing Techniques</li>
    <li className="list-disc ">Understand Video Editing Theory and Techniques</li>
    <li className="list-disc ">Use Other supporting software(s) for post-production</li>
    <li className="list-disc ">Organize the Project and Workflow</li>
    <li className="list-disc ">Understand Grammar of Film/Video editing</li>
    <li className="list-disc ">Learn Types of Cuts</li>
    <li className="list-disc ">Perform Sound Editing, treatments, Mix and Mastering</li>
    {/* Add other list items similarly */}
  </ul>
</div>
        </section>
      </div></div>
      </div>
    </div>
  );
};

export default page;
