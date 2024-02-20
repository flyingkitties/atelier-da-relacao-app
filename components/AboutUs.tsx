'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import image1 from '../public/Image1.webp';

function AboutUs() {
  return (
    <div className="py-12 px-5 md:px-[10%] 2xl:px-[20%] 2xl:my-[3%]">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 ">
        <h2 className="text-lg font-semibold ">Sobre nós</h2>
      </div>

      {/* text */}
      <div className="space-y-5 py-2 md:py-5 text-justify text-sm md:text-base xl:text-lg">
        <Image
          className="hidden lg:inline-flex lg:float-right lg:max-w-[400px] xl:max-w-[450px] h-auto lg:pl-5 pt-5"
          src={image1}
          alt="Atelier photo depicting chair and table"
        />
        <p>
          O Atelier da Relação nasce de uma criação a dois. Dois psicólogos e
          psicoterapeutas. Uma co-construção de um lugar de criatividade e
          afetividade, de histórias e relações. De passados, presentes e de
          novos futuros.
        </p>
        <p>
          Através dele surgirá a dupla paciente-terapeuta, com tudo o que isso
          implicará…os sonhos, o amor, a criação simbólica, o pensamento,
          esperanças, descobertas, e um desenvolvimento e crescimento saudáveis.
          O acesso ao mundo interno e abertura ao mundo externo. A
          internalização de um novo olhar sobre si. Recriar condições para
          reescrever a história de cada um através deste espaço terapêutico.
        </p>
        <Image
          className="lg:hidden"
          src={image1}
          alt="Atelier photo depicting chair and table"
        />
        <p>
          “…ensina-me a ser gente, sentir as minhas emoções, ter sentimentos,
          pensar os meus pensamentos, ter pensamento; ser sujeito, reconhecer-me
          como alguém em devir…”, como nos ensinou Coimbra de Matos.
        </p>
        <p>
          E porque a vida é movimento e a vida mental é criatividade, surge o
          nosso, e agora o vosso, Atelier.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
