import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';

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
      <nav className="flex items-center space-x-5">
        <Link
          href="https://www.facebook.com/atelierdarelacao"
          className="p-1 bg-greenColor rounded-full"
        >
          <CiFacebook className="h-6 w-6 xl:h-8 xl:w-8 text-white" />
        </Link>
        <Link
          href="https://www.instagram.com/atelierdarelacao"
          className="p-1 bg-greenColor rounded-full"
        >
          <FaInstagram className="h-6 w-6 xl:h-8 xl:w-8 text-white" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
