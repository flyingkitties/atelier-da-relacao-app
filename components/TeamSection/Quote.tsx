import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';

function Quote() {
  return (
    <div className="section-container py-10 text-center bg-greenColor">
      <div className="quoteContainer">
        <div>
          <RiDoubleQuotesL className="quoteIcon" />
        </div>
        <div className="quoteTextBox">
          <p className="italic font-semibold text-sm md:text-base leading-7">
            &quot;O que importa agora é fornecer a compreensão e o complemento
            que faltaram (ao paciente) - para que o desenvolvimento e a saúde, a
            nova vida, se instalem. Aberto o caminho, é só caminhar...&quot;
          </p>
          <p className="text-[10px] sm:text-xs">
            António Coimbra de Matos (2017), Laço de Seda - Mente de Diamante.
          </p>
        </div>
        <div className="flex justify-end">
          <RiDoubleQuotesR className="quoteIcon" />
        </div>
        <div className="outterBoxEffect"></div>
      </div>
    </div>
  );
}

export default Quote;
