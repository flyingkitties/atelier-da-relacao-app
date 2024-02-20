'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../public/Logo-noBg.png';
import Link from 'next/link';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { motion, useScroll, useTransform } from 'framer-motion';

function Banner() {
  const { scrollYProgress } = useScroll();

  const moveWave1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const moveWave2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const moveWave3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div className="relative top-10 flex flex-col items-center justify-center text-gray-700 bg-gradient-to-b from-white to-greenColor">
      <div className="flex flex-shrink flex-wrap justify-center space-y-3 md:space-y-0 space-x-2 sm:space-x-5 py-[5%] px-5">
        <button className="button1 mt-3 ml-3 md:m-0">Sobre nós</button>
        <button className="button1">Serviços</button>
        <button className="button1">Equipa</button>
        <button className="button1">Onde estamos</button>
        <button className="button1 bg-greenColor text-white ">
          <p className="drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
            Marcações
          </p>
        </button>
      </div>
      <Image
        className="my-2 sm:my-5 sm:mx-[20%] px-5 sm:px-[20%]  lg:px-[25%] xl:px-[30%]  w-full h-auto pb-[30%] md:pb-[20%] lg:pb-[12%]"
        src={logo}
        alt="Atelier da relacao logo"
      />
      <section className="relative w-full bottom-0 ">
        <motion.div
          className="wave "
          id="wave1"
          style={{ translateX: moveWave1 }}
        ></motion.div>
        <motion.div
          className="wave"
          id="wave2"
          style={{ translateX: moveWave2 }}
        ></motion.div>
        <motion.div
          className="wave w-full"
          id="wave3"
          style={{ translateX: moveWave3 }}
        ></motion.div>
      </section>
    </div>
  );
}

export default Banner;
