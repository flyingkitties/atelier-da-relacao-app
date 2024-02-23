'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
};

function Appointments() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:atelier.relacao@gmail.com?subject=${formData.subject}&body=Nome: ${formData.name} %0D%0A Email: ${formData.email}  %0D%0A Numero de telefone: ${formData.phoneNumber} %0D%0A Mensagem: ${formData.message} `;
  };

  return (
    <div className="relative top-16 py-16 flex flex-col items-center justify-center px-5 md:px-[10%] bg-gray-200">
      <div className="grid grid-row md:grid-cols-2 w-full rounded-xl bg-darkGreenColor ">
        {/* info for appointments */}
        <div className="p-5">
          <h2 className="sectionTitle text-white text-center">Marcações</h2>
          <p></p>
        </div>
        {/* form */}

        <div className="m-5 bg-gray-100 rounded-xl p-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full p-5 space-y-5 
            text-sm"
          >
            <input
              {...register('name')}
              placeholder="Nome"
              className="formInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="formInput"
              type="email"
            />
            <input
              {...register('phoneNumber')}
              placeholder="Numero de telemovel"
              className="formInput"
              type="tel"
            />

            <input
              {...register('subject')}
              placeholder="Assunto"
              className="formInput"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Mensagem"
              className="formInput min-h-[100px]"
            />
            <button
              type="submit"
              className="bg-darkGreenColor py-3 rounded-lg text-white font-bold hover:bg-darkGreenColor/80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
