import React from 'react';
import FormAppointments from './FormAppointments';

function Appointments() {
  return (
    <div className="section-container bg-white">
      <div className="grid grid-row md:grid-cols-2 w-full rounded-xl bg-darkGreenColor shadow-lg ">
        {/* info for appointments */}
        <div className="p-5">
          <h2 className="sectionTitle text-white text-center">Marcações</h2>
          <p></p>
        </div>
        <FormAppointments />
      </div>
    </div>
  );
}

export default Appointments;
