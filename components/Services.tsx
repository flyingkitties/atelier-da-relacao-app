import React from 'react';
import image2 from '../public/Image2.jpg';
import Image from 'next/image';
import { MdOutlinePsychology } from 'react-icons/md';
import { PiBrainLight } from 'react-icons/pi';
import icon1 from '@/public/BrainIcon.png';
import icon2 from '@/public/Icon2.png';
import icon3 from '@/public/Icon3.png';
import icon4 from '@/public/Icon4.png';
import icon5 from '@/public/Icon5.png';

function Services() {
  return (
    <div className="relative top-16 py-10 px-5 md:px-[10%] bg-darkGreenColor">
      {/* Title */}
      <div className="flex items-center justify-center py-5 z-50">
        <h2 className="text-lg font-semibold text-white px-5 py-2 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
          Serviços
        </h2>
      </div>
      {/* Service tiles */}
      <div className="flex flex-col items-center justify-center py-5 pb-10 space-y-16 rounded-md z-50 md:mx-[15%] lg:mx-[20%] xl:mx-[30%]">
        <div className="serviceTiles">
          <Image
            className="serviceImage "
            src={icon3}
            alt="Outline image on children"
          />
          <p>Consulta de psicologia e psicoterapia de crianças</p>
          <p className="servicePrice">Sessão: 50€</p>
          <button className="button2">Agendar</button>
        </div>
        <div className="serviceTiles">
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon2}
            alt="Outline image of a heart and a brain"
          />
          <p>Consulta de psicologia e psicoterapia de adolescentes</p>
          <p className="servicePrice">Sessão: 50€</p>
          <button className="button2">Agendar</button>
        </div>

        <div className="serviceTiles">
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon4}
            alt="Outline image of holding hands over a heart"
          />
          <p>Consulta de psicologia e psicoterapia de adultos</p>
          <p className="servicePrice">Sessão: 50€</p>
          <button className="button2">Agendar</button>
        </div>
        <div className="serviceTiles">
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon5}
            alt="Outline image of a brain inside a human head"
          />
          <p>Avaliação Psicológica</p>
          <p className="servicePrice">Sessão: 50€</p>
          <button className="button2">Agendar</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
