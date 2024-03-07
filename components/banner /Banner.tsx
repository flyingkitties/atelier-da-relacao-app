'use client';
import React from 'react';
import LogoSvg from './LogoSvg';
import NavHeader from './NavHeader';
import Image from 'next/image';

function Banner() {
  return (
    <div className="bannerContainer">
      <NavHeader />
      <div className="logoContainer">
        <LogoSvg />
        <div>
          <h1 className="LogoTitle1">Atelier da Relação</h1>
          <h2 className="logoTitle2">Psicologia Clinica e Psicoterapia</h2>
        </div>
        <button
          type="button"
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Throw error
        </button>
      </div>

      <section>
        <div
          className="wave "
          id="wave1"
        >
          <Image
            src="/public/wave.png"
            alt=""
            width="0"
            height="0"
            style={{ display: 'none!important' }}
          />
        </div>
        <div
          className="wave"
          id="wave2"
        >
          <Image
            src="/public/wave.png"
            alt=""
            width="0"
            height="0"
            style={{ display: 'none!important' }}
          />
        </div>
        <div
          className="wave"
          id="wave3"
        >
          <Image
            src="/public/wave.png"
            alt=""
            width="0"
            height="0"
            style={{ display: 'none!important' }}
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
