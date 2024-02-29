import React from 'react';
import { TiSpiral } from 'react-icons/ti';

import Image from 'next/image';
import { ProfileProps } from './Props';

function PhotoProfile({ photo, name, profession, id, points }: ProfileProps) {
  return (
    <div className="flex flex-col justify-center ">
      <div className="relative flex justify-center">
        <Image
          className=" px-[20%] z-10 w-full h-auto max-w-[400px]"
          src={photo}
          alt="Filipa Psicóloga"
        />
        <div className="absolute bottom-0 top-[45%] right-0 left-0 bg-greenColor z-0 -mx-3 md:-mx-[20%] xl:-mx-[50%]"></div>
      </div>

      <div className="relative px-2 md:px-5 -top-5 rounded-b-lg z-20 bg-white w-full lg:max-w-[400px] shadow-lg">
        {/* Title */}
        <div className="TeamInfo-container relative z-10 ">
          <h3 className="TeamName">{name}</h3>
          <h4 className="TeamJob">{profession}</h4>
          <p className="TeamCedula text-gray-600">{id}</p>
        </div>
        {/* description */}

        <ul className="text-xs space-y-3 py-5 team">
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
