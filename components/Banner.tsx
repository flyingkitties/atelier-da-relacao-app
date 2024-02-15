import React from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';

function Banner() {
  return (
    <div>
      <Image
        src={logo}
        alt="Atelier da relacao logo"
      />
    </div>
  );
}

export default Banner;
