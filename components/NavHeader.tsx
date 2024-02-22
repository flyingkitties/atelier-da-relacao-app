'use client';
import Link from 'next/link';
import React from 'react';

function NavHeader() {
  const scrollSmooth = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 px-5 py-5">
      <Link
        href="#aboutUs"
        onClick={(e) => {
          scrollSmooth(e, 'aboutUs');
        }}
      >
        <button className="button1">Sobre nós</button>
      </Link>
      <Link
        href="#services"
        onClick={(e) => {
          scrollSmooth(e, 'services');
        }}
      >
        <button className="button1">Serviços</button>
      </Link>
      <Link
        href="#team"
        onClick={(e) => {
          scrollSmooth(e, 'team');
        }}
      >
        <button className="button1">Equipa</button>
      </Link>
      <Link
        href="#location"
        onClick={(e) => {
          scrollSmooth(e, 'location');
        }}
      >
        <button className="button1">Onde estamos</button>
      </Link>
      <Link
        href="#appointments"
        onClick={(e) => {
          scrollSmooth(e, 'appointments');
        }}
      >
        <button className="button1 bg-darkGreenColor border-darkGreenColor hover:text-black hover:bg-transparent text-white ">
          <p>Marcações</p>
        </button>
      </Link>
    </div>
  );
}

export default NavHeader;
