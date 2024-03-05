'use client';
import React from 'react';
import ImageCard from './ImageCard';
import { CardProps } from './Props';

function AboutUs() {
  return (
    <div className="section-container pt-28">
      {/* Title */}
      <div className="title-container">
        <h2 className="sectionTitle">Sobre nós</h2>
      </div>

      {/* text */}
      <div className="space-y-5 py-[8%] md:py-[5%] text-justify hyphens-auto text-xs sm:text-sm lg:text-base xl:text-lg ">
        {/* section 1 */}
        <div className="groupSection-container">
          <div className="aboutUsText">
            <p>
              O Atelier da Relação nasce de uma criação a dois. Dois psicólogos
              e psicoterapeutas: Filipa Fernandes e Vitor Sartóris.
            </p>
            <p>
              Através de uma abordagem de orientação teórica
              Psicodinâmica/Psicanalítica, acreditamos que a relação
              psicoterapêutica, com o seu potencial criativo e terapêutico,
              contribuirá para o processo de um desenvolvimento psíquico e
              crescimento mental saudáveis.
            </p>
          </div>

          <ImageCard card={cards[0]} />
        </div>
        {/* Section 2 */}
        <div className="aboutUsText">
          <p>
            Aqui esperamos co-construir um lugar de criatividade e afetividade,
            de histórias e relações. De passados, presentes e de novos futuros.
          </p>
          <p>
            Através dele surgirá a dupla paciente-terapeuta, com tudo o que isso
            implicará…os <span className="font-bold">sonhos</span>, o{' '}
            <span className="font-bold">amor</span>, a{' '}
            <span className="font-bold">criação simbólica</span>, o{' '}
            <span className="font-bold">pensamento, esperanças</span> e{' '}
            <span className="font-bold">descobertas</span>.
          </p>
        </div>
        {/* section 3 */}
        <div className="groupSection-container">
          <ImageCard card={cards[1]} />
          <div className="aboutUsText">
            <p>
              O acesso ao mundo interno e abertura ao mundo externo. A
              internalização de um novo olhar sobre si. Recriar condições para
              reescrever a história de cada um através deste espaço terapêutico.
            </p>
            <p>
              Como dizia o psicanalista Coimbra de Matos:{' '}
              <span className="italic font-semibold">
                &quot;…ensina-me a ser gente, sentir as minhas emoções, ter
                sentimentos, pensar os meus pensamentos, ter pensamento; ser
                sujeito, reconhecer-me como alguém em devir...&quot;
              </span>
              .
            </p>
          </div>
        </div>
        <div className="aboutUsText">
          <p>
            Assumimos <span className="font-bold">valores</span> como: empatia •
            escuta ativa • respeito • autenticidade • sem julgamentos • empenho
            • competência • humildade • interesse • Pois só assim poderemos
            criar uma relação terapêutica de confiança e promotora de mudanças.
          </p>
        </div>
        {/* Section 4 */}
        <div className="groupSection-container">
          <div className="lg:hidden">
            <ImageCard card={cards[2]} />
          </div>
          <div className="aboutUsText justify-items-start">
            <p>
              A nossa <span className="font-bold">missão </span>enquanto
              psicólogos e psicoterapeutas é abrir ou reabrir o futuro. Para
              além da compreensão do passado e reparação das consequências,
              consideramos que o mais importante é alimentar o fascínio e o
              entusiasmo pelo que há-de vir.
            </p>
            <p>
              E porque a vida é movimento e a vida mental é criatividade, surge
              o <span className="font-bold">nosso</span>, e agora o
              <span className="font-bold"> vosso, Atelier da Relação.</span>
            </p>
          </div>
          <div className="hidden lg:inline-grid">
            <ImageCard card={cards[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

const cards: CardProps[] = [
  {
    url: '/spacePhotos/SP-5.avif',
    id: 1,
    alt: 'Fotografia do Atelier - cadeiras e mesa',
  },
  {
    url: '/spacePhotos/SP-6.avif',
    id: 2,
    alt: 'Fotografia do Atelier - Espaço',
  },
  {
    url: '/spacePhotos/SP-7.avif',
    id: 3,
    alt: 'Fotografia do Atelier - Espaço',
  },
];
