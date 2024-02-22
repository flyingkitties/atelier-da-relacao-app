'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../public/Logo-noBg.png';
import Link from 'next/link';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoSvg from './LogoSvg';
import NavHeader from './NavHeader';

function Banner() {
  const { scrollYProgress } = useScroll();

  const moveWave1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const moveWave2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const moveWave3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div className="relative top-10 flex flex-col items-center justify-center text-gray-700 bg-gradient-to-b from-white to-greenColor">
      <NavHeader />
      <div className="flex flex-col mt-3 mb-[20%] md:mb-[15%] lg:mb-[10%] items-center justify-center">
        <LogoSvg />

        <div>
          <h1 className="uppercase font-franklin pt-5 pb-2 text-2xl md:text-3xl xl:text-4xl text-center">
            Atelier da relação
          </h1>
          <h2 className="font-gistesy text-2xl md:text-3xl xl:text-4xl text-center">
            {' '}
            Psicologia Clínica e Psicoterapia
          </h2>
        </div>
      </div>

      <section className="relative w-full bottom-0 pt-10">
        <div
          className="wave "
          id="wave1"
        ></div>
        <div
          className="wave"
          id="wave2"
        ></div>
        <div
          className="wave w-full"
          id="wave3"
        ></div>
      </section>
    </div>
  );
}

export default Banner;
