import React from 'react';
import image2 from '../public/Image2.jpg';
import Image from 'next/image';

import icon1 from '@/public/Icon1.png';
import icon2 from '@/public/Icon2.png';
import icon3 from '@/public/Icon3.png';
import icon4 from '@/public/Icon4.png';
import icon5 from '@/public/Icon5.png';
// other icon possibilities
import { PiSpiralBold } from 'react-icons/pi';
import { PiBrainLight } from 'react-icons/pi';
import { BiShapeSquare } from 'react-icons/bi';
import { MdOutlinePsychology } from 'react-icons/md';
import { RiShapesLine } from 'react-icons/ri';
import { FaCircleNodes } from 'react-icons/fa6';

function Services() {
  return (
    <div className="relative top-16 py-10 px-5 md:px-[10%] 2xl:px-[20%] bg-darkGreenColor">
      {/* Title */}
      <div className="flex items-center justify-center py-5">
        <h2 className="sectionTitle text-white">Serviços</h2>
      </div>
      {/* Service tiles */}
      <div className="flex flex-col md:grid grid-flow-row grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center justify-center py-10 lg:py-16 xl:py-20 pb-10 space-y-5 md:space-y-0 rounded-md ">
        <div className="serviceTiles">
          <Image
            className="serviceImage "
            width={68}
            height={68}
            src={icon3}
            alt="Outline image on children"
          />
          <p>Consulta de Psicologia e Psicoterapia de Crianças</p>
          <p className="servicePrice">Sessão: 50€</p>
          {/* <button className="button2">Agendar</button> */}
        </div>
        <div className="serviceTiles">
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon5}
            alt="Outline image of a heart and a brain"
          />
          <p>Consulta de Psicologia e Psicoterapia de Adolescentes</p>
          <p className="servicePrice">Sessão: 50€</p>
          {/* <button className="button2">Agendar</button> */}
        </div>

        <div className="serviceTiles">
          <Image
            className="h-24 md:h-28 w-auto"
            width={68}
            height={68}
            src={icon4}
            alt="Outline image of holding hands over a heart"
          />
          <p>Consulta de Psicologia e Psicoterapia de Adultos</p>
          <p className="servicePrice">Sessão: 50€</p>
          {/* <button className="button2">Agendar</button> */}
        </div>
        <div className="serviceTiles">
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon1}
            alt="Outline image of a brain inside a human head"
          />
          <p>Avaliação Psicológica</p>
          <p className="servicePrice">Sessão: 50€</p>
          {/* <button className="button2">Agendar</button> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
