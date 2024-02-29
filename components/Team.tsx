import Image from 'next/image';
import React from 'react';
import vitor from '../public/Vitor.png';
import PhotoProfile from './PhotoProfile';
import filipa from '../public/Filipa.png';

function Team() {
  return (
    <div className="py-16 px-5 md:px-[10%] 2xl:px-[20%] 2xl:my-[3%] font-franklin bg-white">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 ">
        <h2 className="sectionTitle">Equipa</h2>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-5 py-10 space-y-10 lg:space-y-0 items-center justify-items-center">
        {/* Filipa */}
        <PhotoProfile
          photo={filipa}
          name="Filipa Fernandes"
          profession="Psicóloga"
          id="Cédula OPP 18907"
          points={[
            'Mestrado em Psicocriminologia Clínica no ISPA',
            'Membro da Sociedade Portuguesa de Psicologia Clínica (SPPC)',
            'Formação em Avaliação Psicológica da Criança e Adolescente',
            'Experiência em Necessidades Educativas Especiais em contexto escolar',
          ]}
        />
        {/* Vitor */}
        <PhotoProfile
          photo={vitor}
          name="Vitor Sartóris"
          profession="Psicólogo"
          id="Cédula OPP 22604"
          points={[
            'Mestrado em Psicologia Clínica no ISPA',
            'Membro da Sociedade Portuguesa de Psicologia Clínica (SPPC)',
            'Pós-Graduação em Psicologia do Desperto e Atividade Física, no ISPA',
            'Experiência em contexto de Unidade de Saúde Familiar e Hospitalar',
          ]}
        />
      </div>
    </div>
  );
}

export default Team;
