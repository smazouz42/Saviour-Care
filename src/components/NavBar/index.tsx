'use client'
import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const NavItems = [
    "Home",
    "Find a doctor",
    "Apps",
    "Testimonials",
    "About us",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex justify-between  p-8 container mx-auto">
      <div className="flex items-center gap-2  ">
        <Image
          src="/saviour-logo.png"
          alt="Vercel Logo"
          width={29.59}
          height={27.17}
        />
        <h1 className="text-xl ">Saviour Care</h1>
      </div>

      <div className="hidden md:flex items-center gap-10 ">
        {NavItems.map((item) => (
          <a key={item} className="text-md text-gray-500 hover:border-b-2 border-blue-500 hover:text-blue-500 "  href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoMdMenu className={'transform transition duration-500  ' + (isMenuOpen ? 'rotate-90 text-blue-500 ' : 'rotate-0')} size={30} />
        </button>
          <div className={`absolute bg-white top-[100px] left-0 w-screen h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-10  transition duration-500 ` + (isMenuOpen ? 'translate-x-0' : 'translate-x-full')}>
            {NavItems.map((item) => (
              <a key={item} className="text-md text-gray-500 hover:border-b-2 border-blue-500 hover:text-blue-500 "  href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          
      </div>
    </div>
  );
};

export { NavBar };
