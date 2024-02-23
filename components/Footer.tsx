import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import logo from '@/public/Logo-white.png';
import Image from 'next/image';
import { PiHouseLine } from 'react-icons/pi';
import { BsTelephone } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

function Footer() {
  return (
    <div>
      <div className="relative top-16 pt-6 bg-darkGreenColor text-white text-xs ">
        {/* Socials */}
        <nav className="flex items-center justify-center space-x-5">
          <Link
            href="https://www.facebook.com/atelierdarelacao"
            target="_blank"
            rel="noopener noreferrer"
            className="p-[6px] bg-gray-100 rounded-full"
          >
            <RiFacebookCircleLine className="h-6 w-6 xl:h-8 xl:w-8 text-darkGreenColor" />
          </Link>
          <Link
            href="https://www.instagram.com/atelierdarelacao"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full"
          >
            <FaInstagram className="h-5 w-5 xl:h-7 xl:w-7 text-darkGreenColor" />
          </Link>
        </nav>
        {/* Contact info */}
        <div className="flex flex-col items-center justify-center pt-5 md:px-[10%] 2xl:px-[20%]">
          <div className="px-20">
            <Image
              className="w-full h-auto"
              src={logo}
              alt="Atelier da relação Logo"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full space-y-3 px-5 pb-3">
            {/* Hora de atendimento */}
            <div className="contactInfoDiv">
              <IoTimeOutline className="h-5 w-5 xl:h-7 xl:w-7 text-gray-100" />
              <p>Segunda a Sexta das 09:00-21:30</p>
              <p>Sábado das 09:00-13:00</p>
            </div>
            {/* Telefone */}
            <div className="contactInfoDiv">
              <BsTelephone className="h-4 w-4 xl:h-6 xl:w-6 text-gray-100" />
              <p>+351 916 763 987</p>
            </div>
            <div className="contactInfoDiv">
              <BsTelephone className="h-4 w-4 xl:h-6 xl:w-6 text-gray-100" />
              <p>+351 916 356 283</p>
            </div>
            {/* Morada */}
            <div className="contactInfoDiv">
              <SlLocationPin className="h-5 w-5 xl:h-7 xl:w-7 text-gray-100" />
              <p>Rua Francisco de Holanda, Nº22, R/C Direito. Lisboa</p>
            </div>
            {/* Email */}
            <div className="contactInfoDiv">
              <MdOutlineMailOutline className="h-5 w-5 xl:h-7 xl:w-7 text-gray-100" />
              <p>atelier.relacao@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Terms and privacy */}
        <div className="flex justify-center p-5 text-xs px-5 md:px-[10%] 2xl:px-[20%]">
          <p className="px-5">Termos e Condições</p>
          <p className="px-5">Política de Privacidade</p>
        </div>
        {/* Copyright */}
        <div className="flex justify-center items-center px-5 text-[9px] border-t-[0.4px] border-gray-400 py-5">
          <p>Copyright © 2024 Atelier da Relação</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
