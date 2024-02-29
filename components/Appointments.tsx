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
       bg-gray-50 shadow-lg my-[8%] md:my-[5%] max-w-xl"
        >
          {/* info for appointments */}
          <div className="m-3 md:m-5 p-3">
            <h3>
              Preencha este formulario e entramos em contacto assim que possivel
            </h3>
          </div>
          <FormAppointments />
        </div>
      </div>
    </div>
  );
}

export default Appointments;
