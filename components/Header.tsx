import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';

function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <div className="headerTitle">
        <Link href="/">
          <p className="headerTitleText">Atelier da Relação</p>
        </Link>
      </div>
      {/* nav */}
      <nav className="headerSocialsBox">
        <Link
          aria-label="O nosso Facebook"
          href="https://www.facebook.com/atelierdarelacao"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[6px] bg-darkGreenColor rounded-full"
        >
          <CiFacebook className="headerSocialIcons" />
        </Link>
        <Link
          aria-label="O nosso Istagram"
          href="https://www.instagram.com/atelierdarelacao"
          target="_blank"
          rel="noopener noreferrer"
          className="headerSocialsRing"
        >
          <CiInstagram className="headerSocialIcons" />
        </Link>
        <Link
          aria-label="Mapa de onde estamos"
          href="https://www.google.com/maps/place/R.+Francisco+de+Holanda,+Lisboa,+Portugal/@38.744446,-9.156749,15z/data=!4m6!3m5!1s0xd1933054a7592a7:0x8f126d16c5ea702f!8m2!3d38.7444458!4d-9.1567486!16s%2Fg%2F119wf3fzg?hl=en&gl=GB"
          target="_blank"
          rel="noopener noreferrer"
          className="headerSocialsRing"
        >
          <CiLocationOn className="headerSocialIcons" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
