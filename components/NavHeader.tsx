import React from 'react';

function NavHeader() {
  return (
    <div className="flex flex-shrink flex-wrap justify-center space-y-3 md:space-y-0 space-x-2 sm:space-x-5 py-[5%] px-5">
      <button className="button1 mt-3 ml-3 md:m-0">Sobre nós</button>
      <button className="button1">Serviços</button>
      <button className="button1">Equipa</button>
      <button className="button1">Onde estamos</button>
      <button className="button1 bg-greenColor text-white ">
        <p className="drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">Marcações</p>
      </button>
    </div>
  );
}

export default NavHeader;
