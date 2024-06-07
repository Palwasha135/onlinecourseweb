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
import { IoMdCheckmark } from "react-icons/io";
const page = () => {
  return (
    <div className=" overflow-hidden mb-9">
      <section>
  <div className="relative">
    <Image className="top-0 w-full object-cover h-32 md:h-52 opacity-40" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGpYzfIx3hhPf03eCHxW16H7icTZZKc7sjg&s'} alt=" " width={300} height={40}/>
    <h1 className="absolute top-10 left-10 text-3xl md:text-5xl font-semibold text-red-400">Video Editing</h1>
  </div>
</section>
   <div className="pt-7">
    <div className="mx-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <section className="w-full ">
  
          <iframe    
           className="w-full xs:h-60  sm:h-96 "     src="https://www.youtube.com/embed/038Yap5NHoI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="">
            <h1 className=" text-xl font-semibold p-2">About</h1>
            <p className="text-sm p-2">
            The course is aimed to familiarize students with the art of Video Post-Production that is the need of current Broadcast and Digital Media Industry. It is going to be productive as well as practical course so that the learners can excel in their respective fields. This intensive practice based course will encourage students to understand from basics to advance video editing, motion graphics and Vlogging skills. They will also be able to identify and discover different Production/Post production practices and develop their own style.
            </p>
            <p className="text-sm p-2">This demanding Course is divided into 3 parts. The first two parts; Video Editing and Animation will involve trainees to learn the craft of editing, motion graphics, VFX, text animations and other post production techniques. The third part is about expressing yourself with the art of Vlogging that helps connect with people from all over the world. The videos created by the creator reach the audience all over the world and that`s how it helps people connect with each other. It also helps in gaining exposure and makes the creators stand out in the community. This course will cover theory and practice of editing and focus on highlighting the roles and responsibilities of an individual carrying the fundamental skills of the expertise.</p>
         <p className="text-sm p-2">This course will not only benefit an individual to learn the skill and start earning in local, international and freelance market but it will guide you make new connections and start enjoying creative and financial freedom in broadcast, film and digital media industry.</p>
          </div>
          <div className="sm:flex  ">
            <div className="pt-7  ">
              <div className="image  mx-auto  xs:w-56   ">
                <Image
                  src="https://media.licdn.com/dms/image/C4D03AQH4uP7SPiCk1w/profile-displayphoto-shrink_200_200/0/1656938752722?e=2147483647&v=beta&t=FIZy2TwCMJOmi-Vaqe6ijulmUpDwgoCEJZW718bXWCE"
                  width={400}
                  height={100}
                  alt="instructor"
                 
                />
              </div>
            </div>
            <div className="sm:m-5 md:m-8 ">
              <div className="text">
                <h2 className="my-3 font-bold text-xl  sm:text-2xl ">
                Syed Umair Ali
                  <span className=" font-normal">
                  (M.SC Mass Communication)

                  </span>
                </h2>
                <p className="text-gray-700 text-sm ">
                Syed Umair Ali has extensive work experience in the fields of Broadcast, Filmmaking, Electronic and Digital Media. He prides himself on working with some of the top-notch companies in Pakistan as well as abroad. He has been working with different TV Channels, Private Production Houses and Live Sports events globally for more than 20 years at their Creative, Production and Post-production side. He started his career at Shin Satellite, Thailand but since has worked for numerous mainstream TV Channels including Din News, Waqt TV, Geo TV. He has contributed his expertise to several award-winning and nominated international projects. Besides being a full-time practitioner of his craft, Mr. Umair is now dedicating his energies to coaching and facilitating future filmmakers through comprehensive trainings. He teaches at the National College of Arts (NCA), The University of Lahore, The Millennium Universal College and the Institute of Art and Culture as a visiting faculty member.  </p><br/>
                       <p className="text-gray-700 text-sm ">
                       Leveraging his background as a broadcaster, filmmaker, and trainer, he has supported organizations and institutes in developing the competency of Media Production and Filmmaking with their people to maximize results. Currently, he is running his own Production company “White Frog Works” and “Ask Trainings”, a training institute focusing on skills development. Mr. Umair is among very few Media professionals from Pakistan associated with Live International Sports Productions around the World and worked for events like ICC Men’s T20 World Cup Australia, Major League Cricket USA, International League T20 UAE and Pakistan Super League as an E.N.G Producer, Editor, Preditor and EVS operator. He recently completed his Broadcast Trainings from London.

</p><br/>
                         
               
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
      </div>
    </div>
    </div>
    </div>
  );
};

export default page;
