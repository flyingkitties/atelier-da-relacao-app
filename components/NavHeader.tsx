import Link from 'next/link';
import React from 'react';

function NavHeader() {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-5 py-5">
      <Link href="#aboutUs">
        <button className="button1">Sobre nós</button>
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
