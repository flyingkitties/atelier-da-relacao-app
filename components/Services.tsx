import React from 'react';
import image2 from '../public/Image2.jpg';
import Image from 'next/image';

function Services() {
  return (
    <div className="pb-12 px-5 md:px-[10%] bg-image2 bg-cover bg-center">
      {/* Title */}
      <div className="flex items-center justify-center py-5 z-50">
        <h2 className="text-lg font-semibold text-white px-5 py-2 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
          Serviços
        </h2>
      </div>
      {/* Service tiles */}
      <div className="flex flex-col items-center justify-center py-5 pb-10 space-y-5 rounded-md z-50 md:mx-[15%] lg:mx-[20%] xl:mx-[30%]">
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
