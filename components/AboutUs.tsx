'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ImageCard from './ImageCard';

type CardProps = {
  url: string;
  id: number;
  alt: string;
};
function AboutUs() {
  return (
    <div className="relative top-16 py-10 px-5 md:px-[10%] 2xl:px-[20%] 2xl:my-[3%]">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 ">
        <h2 className="sectionTitle">Sobre nós</h2>
      </div>

      {/* text */}
      <div className="space-y-5 py-2 md:py-5 text-justify text-sm md:text-base xl:text-lg ">
        {/* section 1 */}
        <div className="grid lg:grid-cols-2 gap-5">
          <ImageCard card={cards[0]} />

          {/* <Image
            className="hidden lg:inline-flex lg:float-right w-full
           h-auto rounded-lg"
            src={imageSP2}
            alt="Atelier photo depicting chair and table"
          /> */}
          <div className="space-y-5">
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
        </div>
        <p>
          Aqui esperamos co-construir um lugar de criatividade e afetividade, de
          histórias e relações. De passados, presentes e de novos futuros.
        </p>
        <p>
          Através dele surgirá a dupla paciente-terapeuta, com tudo o que isso
          implicará…os <span className="font-bold">sonhos</span>, o{' '}
          <span className="font-bold">amor</span>, a{' '}
          <span className="font-bold">criação simbólica</span>, o{' '}
          <span className="font-bold">pensamento, esperanças</span> e{' '}
          <span className="font-bold">descobertas</span>.
        </p>
        <p>
          O acesso ao mundo interno e abertura ao mundo externo. A
          internalização de um novo olhar sobre si. Recriar condições para
          reescrever a história de cada um através deste espaço terapêutico.
        </p>
        {/* section 2 */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="space-y-5">
            <p>
              Como dizia o psicanalista Coimbra de Matos: “…ensina-me a ser
              gente, sentir as minhas emoções, ter sentimentos, pensar os meus
              pensamentos, ter pensamento; ser sujeito, reconhecer-me como
              alguém em devir...".
            </p>
            <p>
              Assumimos <span className="font-bold">valores</span> como: empatia
              • escuta ativa • respeito • autenticidade • sem julgamentos •
              empenho • competência • humildade • interesse • Pois só assim
              poderemos criar uma relação terapêutica de confiança e promotora
              de mudanças.
            </p>
          </div>
          <ImageCard card={cards[1]} />
        </div>
        <p>
          A nossa <span className="font-bold">missão </span>enquanto psicólogos
          e psicoterapeutas é abrir ou reabrir o futuro. Para além da
          compreensão do passado e reparação das consequências, consideramos que
          o mais importante é alimentar o fascínio e o entusiasmo pelo que há-de
          vir.
        </p>
        <p>
          E porque a vida é movimento e a vida mental é criatividade, surge o{' '}
          <span className="font-bold">nosso</span>, e agora o{' '}
          <span className="font-bold">vosso, Atelier da Relação.</span>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

const cards: CardProps[] = [
  {
    url: '/spacePhotos/SP-2-6.jpg',
    id: 1,
    alt: 'Fotografia do Atelier - cadeiras e mesa',
  },
  {
    url: '/spacePhotos/SP-3.jpeg',
    id: 2,
    alt: 'Fotografia do Atelier - Espaço',
  },
];
