import Link from 'next/link';
import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import logo from '@/public/Logo-white.png';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiFacebook } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';

function Footer() {
  return (
    <div className="footer-container">
      {/* Contact info */}
      <div className="contactInfoBox">
        <div className="px-20 lg:px-0">
          <Image
            className="w-full h-auto lg:h-full lg:w-auto"
            src={logo}
            alt="Atelier da relação Logo"
          />
        </div>
        <div className="contactsBox">
          {/* Hora de atendimento */}
          <div className="contact">
            <IoTimeOutline className="footerIconMed" />
            <p>Segunda a Sexta das 09:00-21:30</p>
            <p>-{'  '}Sábado das 09:00-13:00</p>
          </div>
          {/* Telefone */}
          <div className="contact">
            <BsTelephone className="footerIcon1Small" />
            <p>+351 916 763 987</p>
          </div>
          <div className="contact">
            <BsTelephone className="footerIcon1Small" />
            <p>+351 916 356 283</p>
          </div>
          {/* Morada */}
          <div className="contact">
            <SlLocationPin className="footerIconMed" />
            <p>Rua Francisco de Holanda, Nº22, R/C Direito. Lisboa</p>
          </div>
          {/* Email */}
          <div className="contact">
            <MdOutlineMailOutline className="footerIconMed" />
            <p>atelier.relacao@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        {/* Socials */}
        <nav className="flex items-center justify-center space-x-5">
          <Link
            href="https://www.facebook.com/atelierdarelacao"
            target="_blank"
            rel="noopener noreferrer"
            className="socialsRing"
            aria-label="o nosso facebook"
          >
            <CiFacebook className="footerSocials" />
          </Link>
          <Link
            href="https://www.instagram.com/atelierdarelacao"
            target="_blank"
            rel="noopener noreferrer"
            className="socialsRing"
            aria-label="o nosso instagram"
          >
            <CiInstagram className="footerSocials" />
          </Link>
        </nav>
      </div>
      {/* Terms and privacy */}
      <div className="termsAndprivacyBox">
        <Link href="/termos-e-condicoes">
          <p className="sm:px-5">Termos e Condições</p>
        </Link>
        <p>|</p>
        <Link href="/politica-de-privacidade">
          <p className="sm:px-5">Política de Privacidade</p>
        </Link>
      </div>
      {/* Copyright */}
      <div className="copyright">
        <p>Copyright © 2024 Atelier da Relação</p>
      </div>
    </div>
  );
}

export default Footer;
