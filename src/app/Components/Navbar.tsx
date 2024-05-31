"use client"
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      {/* <div className=" w-full h-20 shadow-md z-[100] bg-gradient-to-b from-black to-[#124C81] border border-[#124b81c7]"> */}
      <div className="top-0 sticky  w-full h-20 shadow-md z-[100] bg-white border-[#db7618c7]">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-5">
          <Link  href="/">
            {/* <button className="font-bold text-white bg-white bg-opacity-35 px-7 rounded-full p-1 pb-2">
              LOGO
            </button> */}
             <Image src="/images/logo2.PNG" alt="Logo" width={200} height={200} />
          </Link>

          <div>
            <ul className="hidden md:flex items-center">
              <li className="border-b border-transparent ml-10 text-[#ff3300ee] font-Poppins  font-bold text-2xl rounded hover:underline underline-offset-8 decoration-2 ">
                <Link  href="/" onClick={closeNav}>
                  Home
                </Link>
              </li>
             
              <li className="border-b border-transparent ml-10 hover:text-[#ff3300ee]  text-black font-Poppins  font-bold text-2xl rounded hover:underline underline-offset-8 decoration-2 ">
                <Link  href="/services" onClick={closeNav}>
                  Services
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:text-[#ff3300ee]  text-black font-Poppins  font-bold text-2xl rounded hover:underline underline-offset-8 decoration-2 ">
                <Link  href="/our-courses" onClick={closeNav}>
                  Courses
                </Link>
              </li>
               <li className="border-b border-transparent ml-10 hover:text-[#ff3300ee]  text-black font-Poppins  font-bold text-2xl rounded hover:underline underline-offset-8 decoration-2 ">
                <Link  href="/about-us" onClick={closeNav}>
                  About
                </Link>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden text-black">
              <AiOutlineMenu size="20" />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  "
              : ""
          }`}
          style={{ zIndex: 50 }}
        >
          <div
            className={`${
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ff3300ee]  p-10 ease-in duration-500 "
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
            }`}
          >
            <div className="flex  ">
              <div className=" flex flex-col">
                <ul className="">
                  <li className="py-4 text-black hover:text-white ">
                    <Link  href="/" onClick={closeNav}>
                      Home
                    </Link>
                  </li>
                  <li className="py-4 text-black hover:text-white ">
                    {" "}
                    <Link  href="/about-us" onClick={closeNav}>
                      About
                    </Link>
                  </li>
                  <li className="py-4 text-black hover:text-white ">
                    <Link  href="/our-courses" onClick={closeNav}>
                      Courses
                    </Link>
                  </li>
                  <li className="py-4 text-black hover:text-white ">
                    <Link  href="/services" onClick={closeNav}>
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="absolute top-0 right-0">
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 m-5 cursor-pointer text-black"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
