import React from 'react';

function WhereWeAre() {
  return (
    <div className="relative top-16 py-10  px-5 md:px-[10%] 2xl:px-[20%] 2xl:my-[3%]">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 ">
        <h2 className="text-lg font-semibold ">Onde estamos</h2>
      </div>
      <div className="lg:grid grid-cols-2 gap-5 py-5 space-y-5 lg:space-y-0 text-xs text-center">
        <iframe
          className="w-full h-auto pb-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.8394729981505!2d-9.159328888373905!3d38.744445771639306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933054a7592a7%3A0x8f126d16c5ea702f!2sR.%20Francisco%20de%20Holanda%2C%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2suk!4v1708444782151!5m2!1sen!2suk"
          loading="lazy"
        ></iframe>
        <div className="flex flex-col items-center justify-center space-y-5">
          <p>Rua Francisco de Holanda, Nº22, R/C Direito. Lisboa</p>
          <p>
            (Próximo da estação de metro de Entrecampos e do Hospital Santa
            Maria)
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhereWeAre;
