import Link from 'next/link';
import React from 'react';

function NavHeader() {
  return (
    <div className="flex flex-shrink flex-wrap justify-center space-y-3 md:space-y-0 space-x-2 sm:space-x-5 py-[5%] px-5">
      <Link href="#aboutUs">
        <button className="button1 mt-3 ml-3 md:m-0">Sobre nós</button>
      </Link>
      <Link href="#services">
        <button className="button1">Serviços</button>
      </Link>
      <Link href="#team">
        <button className="button1">Equipa</button>
      </Link>
      <Link href="#location">
        <button className="button1">Onde estamos</button>
      </Link>
      <Link href="#appointments">
        <button className="button1 bg-darkGreenColor border-darkGreenColor hover:text-black hover:bg-transparent text-white ">
          <p>Marcações</p>
        </button>
      </Link>
    </div>
  );
}

export default NavHeader;
