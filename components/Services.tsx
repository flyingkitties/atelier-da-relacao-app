'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import icon1 from '@/public/servicesIcons/Icon1.png';
import icon3 from '@/public/servicesIcons/Icon3.png';
import icon4 from '@/public/servicesIcons/Icon4.png';
import icon5 from '@/public/servicesIcons/Icon5.png';
import { motion, useInView } from 'framer-motion';

function Section({ children }: { children: any }): React.JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="serviceTiles"
        style={{
          transform: isInView ? 'none' : 'translateX(-50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  );
}
function Services() {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="section-container bg-darkGreenColor">
      {/* Title */}
      <div className="title-container">
        <h2 className="sectionTitle text-white">Serviços</h2>
      </div>
      {/* Service tiles */}
      <div className="tiles-container">
        {/* Tile 1 */}
        <Section>
          <Image
            className="serviceImage "
            width={68}
            height={68}
            src={icon3}
            alt="Outline image on children"
          />
          <p className="serviceTitle">
            Consulta de Psicologia e Psicoterapia de Crianças
          </p>
          <p className="servicePrice">Sessão: 50€</p>
        </Section>
        {/* Tile 2 */}
        <Section>
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon5}
            alt="Outline image of a heart and a brain"
          />
          <p className="serviceTitle">
            Consulta de Psicologia e Psicoterapia de Adolescentes
          </p>
          <p className="servicePrice">Sessão: 50€</p>
        </Section>
        {/* Tile 3 */}
        <Section>
          <Image
            className="h-24 md:h-28 xl:h-36 w-auto"
            width={68}
            height={68}
            src={icon4}
            alt="Outline image of holding hands over a heart"
          />
          <p className="serviceTitle">
            Consulta de Psicologia e Psicoterapia de Adultos
          </p>
          <p className="servicePrice">Sessão: 50€</p>
        </Section>
        {/* Tile 4 */}
        <Section>
          <Image
            className="serviceImage"
            width={68}
            height={68}
            src={icon1}
            alt="Outline image of a brain inside a human head"
          />
          <p className="serviceTitle">Avaliação Psicológica</p>
          <p className="servicePrice">Pacote de 4 sessões: 150€</p>
        </Section>
      </div>
    </div>
  );
}

export default Services;
