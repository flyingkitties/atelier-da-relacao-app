'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Link from 'next/link';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

interface WaveStyle {
  '--i': number;
}

function Banner() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      const wave1 = document.getElementById('wave1');
      const wave2 = document.getElementById('wave2');
      const wave3 = document.getElementById('wave3');
      const wave4 = document.getElementById('wave4');

      if (wave1 && wave2 && wave3 && wave4) {
        wave1.style.backgroundPositionX = `400px ${value * 4}px`;
        wave2.style.backgroundPositionX = `300px ${value * -4}px`;
        wave3.style.backgroundPositionX = `200px ${value * 2}px`;
        wave4.style.backgroundPositionX = `100px ${value * -2}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col pt-10 lg:pt-20 pb-[10%] items-center justify-center text-gray-700 bg-greenColor">
      <div className="flex flex-shrink flex-wrap justify-center space-y-3 md:space-y-0 space-x-2 sm:space-x-5 py-[5%] px-5">
        <button className="button1 mt-3 ml-3 md:m-0">Sobre nós</button>
        <button className="button1">Serviços</button>
        <button className="button1">Equipa</button>
        <button className="button1">Onde estamos</button>
        <button className="button1 bg-greenColor text-white">Marcações</button>
      </div>
      <Image
        className="my-2 sm:my-5 px-5 sm:px-[20%] lg:px-[25%] xl:px-[30%] sm:mx-[20%] w-full h-auto"
        src={logo}
        alt="Atelier da relacao logo"
      />
      <section>
        <div
          className="wave"
          id="wave1"
          style={
            { '--i': 1, backgroundPositionX: '400px' } as React.CSSProperties
          }
        ></div>
        <div
          className="wave"
          id="wave2"
          style={
            { '--i': 2, backgroundPositionX: '300px' } as React.CSSProperties
          }
        ></div>
        <div
          className="wave"
          id="wave3"
          style={
            { '--i': 3, backgroundPositionX: '200px' } as React.CSSProperties
          }
        ></div>
        <div
          className="wave"
          id="wave4"
          style={
            { '--i': 4, backgroundPositionX: '100px' } as React.CSSProperties
          }
        ></div>
      </section>
    </div>
  );
}

export default Banner;
