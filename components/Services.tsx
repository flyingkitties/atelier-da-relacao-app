import React from 'react';
import image2 from '../public/Image2.jpg';
import Image from 'next/image';

function Services() {
  return (
    <div className="relative pb-12 px-5 md:px-[10%] ">
      <Image
        className="absolute top-0 bottom-0 left-0 right-0 brightness-90 min-h-full w-auto object-cover"
        src={image2}
        alt=""
      />
      {/* Title */}
      <div className="flex items-center justify-center py-5 z-50">
        <h2 className="text-lg font-semibold text-white px-5 py-2 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
          Serviços
        </h2>
      </div>
      {/* Service tiles */}
      <div className="flex flex-col items-center justify-center py-8 space-y-5 rounded-md z-50">
        <div className="serviceTiles">
          <p>Consulta de psicologia e psicoterapia de adolescentes</p>
        </div>
        <div className="serviceTiles">
          <p>Consulta de psicologia e psicoterapia de crianças</p>
        </div>
        <div className="serviceTiles">
          <p>Consulta de psicologia e psicoterapia de adultos</p>
        </div>
        <div className="serviceTiles">
          <p>Avaliação Psicológica</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
