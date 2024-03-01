import React from 'react';

function WhereWeAre() {
  return (
    <div className="section-container bg-white">
      {/* Title */}
      <div className="title-container">
        <h2 className="sectionTitle">Onde estamos</h2>
      </div>
      {/* Body */}
      <div className="lg:grid grid-cols-2 gap-5 py-5 space-y-5 lg:space-y-0 text-xs ">
        {/* Google maps */}
        <iframe
          title="Google Map of location"
          className="w-full h-[400px] lg:h-full rounded-lg border-none mb-5 lg:mb-0 shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.8394729981505!2d-9.159328888373905!3d38.744445771639306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933054a7592a7%3A0x8f126d16c5ea702f!2sR.%20Francisco%20de%20Holanda%2C%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2suk!4v1708444782151!5m2!1sen!2suk"
          loading="lazy"
        ></iframe>
        {/* How to get there  */}
        <div className="flex flex-col items-center justify-evenly space-y-5">
          {/* Morada */}
          <div className="whereWeAre-box text-center">
            <span className="font-bold text-base">Morada</span>
            <p>Rua Francisco de Holanda nrº 22 R/C direito, 1600-055 Lisboa</p>
          </div>
          {/* Como chegar */}
          <div className="whereWeAre-box">
            <h3 className="font-bold text-base text-center">Como Chegar</h3>
            <div className="flex items-center justify-center">
              <ul className="space-y-5 pt-5">
                <li>
                  <p>
                    <span className="font-bold">Metro: </span>Linha Amarela -
                    Entrecampos - 11 min. a pé (800 m)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Comboio: </span>Estação de
                    Entrecampos - 11 min. a pé (800 m)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Autocarros: </span>731 e 52B - 1
                    min (70 m)
                  </p>
                  <p>701/732/754/726/755/732/735</p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">
                      Perto do Hospital de Santa Maria:{' '}
                    </span>
                    11 min a pé (800 m)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereWeAre;
