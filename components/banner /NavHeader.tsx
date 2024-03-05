import React from 'react';

function NavHeader() {
  const scrollSmooth = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navHeader">
      <button
        className="button1"
        onClick={(e) => {
          scrollSmooth(e, 'aboutUs');
        }}
      >
        Sobre nós
      </button>

      <button
        className="button1 "
        onClick={(e) => {
          scrollSmooth(e, 'services');
        }}
      >
        Serviços
      </button>

      <button
        className="button1"
        onClick={(e) => {
          scrollSmooth(e, 'team');
        }}
      >
        Equipa
      </button>

      <button
        className="button1"
        onClick={(e) => {
          scrollSmooth(e, 'location');
        }}
      >
        Onde estamos
      </button>

      <button
        className="button1 bg-darkGreenColor border-darkGreenColor
         hover:text-black hover:bg-transparent text-white "
        onClick={(e) => {
          scrollSmooth(e, 'appointments');
        }}
      >
        <p>Marcações</p>
      </button>
    </div>
  );
}

export default NavHeader;
