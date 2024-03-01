'use client';
import React from 'react';
import LogoSvg from './LogoSvg';
import NavHeader from './NavHeader';

function Banner() {
  return (
    <div className="relative h-[85vh] lg:h-[90vh] top-16 flex flex-col items-center  text-gray-700 bg-gradient-to-b from-white to-greenColor">
      <NavHeader />
      <div className="flex flex-col h-full mb-[80px] items-center justify-center">
        <LogoSvg />

        <div>
          <h1 className="uppercase font-franklin pt-5 pb-2 text-2xl md:text-3xl xl:text-4xl text-center">
            Atelier da Relação
          </h1>
          <h2 className="font-gistesy text-2xl md:text-3xl xl:text-4xl text-center">
            {' '}
            Psicologia Clínica e Psicoterapia
          </h2>
        </div>
      </div>

      <section className=" w-full bottom-0 pt-10">
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
