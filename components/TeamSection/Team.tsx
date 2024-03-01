import React from 'react';
import vitor from '../../public/teamPhotos/Vitor.png';
import filipa from '../../public/teamPhotos/Filipa.png';
import Quote from './Quote';
import PhotoProfile from './PhotoProfile';

function Team() {
  return (
    <div className="section-container bg-white">
      {/* Title */}
      <div className="title-container">
        <h2 className="sectionTitle">Equipa</h2>
      </div>
      <div className="team-container">
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
            'Desenvolve prática clínica em consultório privado com crianças, adolescentes e jovens adultos',
            'Integra equipa de Saúde Mental em Instituição na área da Infância e Juventude',
            'Prática profissional em Acolhimento Residencial com crianças e jovens',
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
            'A exercer trabalho clínico em consultório privado com crianças, adolescentes e adultos',
            'A trabalhar numa ONG no apoio psicológico a pessoas vítimas de trauma',
            'Prática profissional na área social na SCML',
          ]}
        />
      </div>
      <Quote />
    </div>
  );
}

export default Team;
