import React from 'react';
import FormAppointments from './FormAppointments';

function Appointments() {
  return (
    <div className="section-container bg-darkGreenColor">
      {/* Title */}
      <div className="title-container">
        <h2 className="sectionTitle text-white">Marcações</h2>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="grid grid-row w-full rounded-xl
       bg-gray-50 shadow-lg my-[3%] md:my-[5%] max-w-xl"
        >
          {/* info for appointments */}
          <div className="m-3 md:m-5 mt-10 p-3 text-center">
            <h3>
              Preencha o formulário e entraremos em contacto consigo para
              agendamento da sua consulta ou para esclarecimento de
              questões/pedido de informação
            </h3>
          </div>
          <FormAppointments />
        </div>
      </div>
    </div>
  );
}

export default Appointments;
