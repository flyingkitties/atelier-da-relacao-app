import React from 'react';
import { TiSpiral } from 'react-icons/ti';
import Image from 'next/image';
import { ProfileProps } from '../Props';

function PhotoProfile({ photo, name, profession, id, points }: ProfileProps) {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative flex justify-center w-full">
        <Image
          className="z-10 w-48 h-48"
          src={photo}
          alt="Filipa Psicóloga"
        />
        <div
          className="absolute bottom-0 top-[45%] bg-greenColor 
        z-0 w-full"
        ></div>
      </div>

      <div
        className="px-2 md:px-5 -mt-5 z-20 bg-white 
      w-full shadow-lg max-[320px]:max-w-64 max-w-72 sm:max-w-96 
       mx-5 h-full"
      >
        {/* Title */}
        <div className="teamInfo-container z-10 ">
          <h3 className="teamName">{name}</h3>
          <h4 className="teamJob">{profession}</h4>
          <p className="teamCedula text-gray-600">{id}</p>
        </div>
        {/* description */}
        <ul className="text-[10px] sm:text-xs space-y-3 py-5 team">
          {points.map((point) => (
            <li key={name}>
              <div>
                <TiSpiral className="text-greenColor w-3 h-3" />
              </div>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotoProfile;
