import Image from 'next/image';
import React from 'react';
import filipa from '../public/Filipa.png';
import vitor from '../public/Vitor.png';

function Team() {
  return (
    <div className="relative top-16 py-10 px-5 md:px-[10%] 2xl:px-[20%] 2xl:my-[3%] bg-white">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 ">
        <h2 className="sectionTitle">Equipa</h2>
      </div>
      <div className="lg:grid grid-cols-2 gap-5 py-5 space-y-5 lg:space-y-0 ">
        <Image
          src={filipa}
          alt="Filipa Psicologa"
        />
        <Image
          src={vitor}
          alt="Filipa Psicologa"
        />
      </div>
    </div>
  );
}

export default Team;
