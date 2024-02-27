import Image from 'next/image';
import React from 'react';
import filipa from '../public/Filipa.png';
import vitor from '../public/Vitor.png';

function Team() {
  return (
    <div className="section-container pb-8 md:pb-0 lg:pb-8 bg-white">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 ">
        <h2 className="sectionTitle">Equipa</h2>
      </div>
      <div className="lg:grid grid-cols-2 gap-5 pt-10">
        <div className="">
          <div className="TeamInfo-container">
            <h3 className="TeamName">Filipa Fernandes</h3>
            <h4 className="TeamJob">Psicóloga</h4>
            <p className="TeamCedula">Cédula OPP 18907</p>
          </div>
          <div className="TeamImageBox">
            <Image
              src={filipa}
              alt="Filipa Psicóloga"
            />
          </div>
        </div>
        <div className="">
          <div className="TeamInfo-container">
            <h3 className="TeamName">Vitor Sartóris</h3>
            <h4 className="TeamJob">Psicólogo</h4>
            <p className="TeamCedula">Cédula OPP 22604</p>
          </div>
          <div className="TeamImageBox">
            <Image
              className=""
              src={vitor}
              alt="Vitor Psicólogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
