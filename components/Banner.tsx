'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Link from 'next/link';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

function Banner() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col pt-10 lg:pt-20  items-center justify-center text-gray-700">
      <div className="flex flex-shrink flex-wrap justify-center space-y-3 md:space-y-0 space-x-2 sm:space-x-5 py-[5%] px-5">
        <button className="button1 mt-3 ml-3 md:m-0">Sobre nós</button>
        <button className="button1">Serviços</button>
        <button className="button1">Equipa</button>
        <button className="button1">Onde estamos</button>
        <button className="button1 bg-greenColor text-white">Marcações</button>
      </div>
      <Image
        className="my-2 sm:my-5 px-5 sm:mx-[20%] w-full h-auto"
        src={logo}
        alt="Atelier da relacao logo"
      />
    </div>
  );
}

export default Banner;
