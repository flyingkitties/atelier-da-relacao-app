'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
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
    window.location.href = `mailto:atelier.relacao@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className=" flex flex-col items-center justify-center py-12 px-5 md:px-[10%] 2xl:px-[20%] 2xl:my-[3%] bg-greenColor">
      {/* Title */}
      <div className="flex items-center justify-center py-2 md:py-5 mb-10 w-full">
        <h2 className="text-lg font-semibold text-white">Marcações</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-80 xl:max-w-96 px-5 space-y-5 text-sm w-full"
        // md:px-[15%] xl:px-[25%]
      >
        <input
          {...register('name')}
          placeholder="Name"
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
          {...register('subject')}
          placeholder="Subject"
          className="formInput"
          type="text"
        />
        <textarea
          {...register('message')}
          placeholder="Message"
          className="formInput min-h-[100px]"
        />
        <button
          type="submit"
          className="bg-darkGreenColor py-3 rounded-lg text-white font-bold hover:bg-[#f7ab0a]/70"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Appointments;
