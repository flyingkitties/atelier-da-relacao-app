import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';

function Header() {
  return (
    <div className="fixed top-0 flex justify-between w-full py-3 xl:py-5 bg-white px-3 sm:px-5 lg:px-10 z-10">
      {/* Logo */}
      <div className="flex items-center ">
        <p className="uppercase tracking-widest text-xs md:text-sm xl:text-lg text-gray-700">
          Atelier da Relação
        </p>
      </div>
      {/* nav */}
      <nav className="flex items-center space-x-2 sm:space-x-5">
        <Link
          href="https://www.facebook.com/atelierdarelacao"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[6px] bg-darkGreenColor rounded-full"
        >
          <RiFacebookCircleLine className="h-6 w-6 xl:h-8 xl:w-8 text-white" />
        </Link>
        <Link
          href="https://www.instagram.com/atelierdarelacao"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-darkGreenColor rounded-full"
        >
          <FaInstagram className="h-5 w-5 xl:h-7 xl:w-7 text-white" />
        </Link>
        <Link
          href="#location"
          className="p-2 bg-darkGreenColor rounded-full"
        >
          <SlLocationPin className="h-5 w-5 xl:h-7 xl:w-7 text-white" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
