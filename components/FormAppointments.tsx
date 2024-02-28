'use client';
import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Inputs, TemplateParams } from './Props';
import { FormControl } from '@mui/material';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function FormAppointments() {
  const options = [
    {
      value: 'Consulta de Psicologia e Psicoterapia de Crianças',
      label: 'Consulta de Crianças',
    },
    {
      value: 'Consulta de Psicologia e Psicoterapia de Adolescentes',
      label: 'Consulta de Adolescentes',
    },
    {
      value: 'Consulta de Psicologia e Psicoterapia de Adultos',
      label: 'Consulta de Adultos',
    },
    {
      value: 'Avaliação Psicológica',
      label: 'Avaliação Psicológica',
    },
  ];

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: null,
      option: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (formData: Inputs) => {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone_number: formData.phoneNumber,
      option: formData.option,
      subject: formData.subject,
      message: formData.message,
    };
    toast.loading('A enviar mensagem...');

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
        templateParams,
        {
          publicKey: `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`,
        },
      )
      .then(
        () => {
          toast('A sua mensagem foi enviada!');
          console.log('success');
          reset();
        },
        (error) => {
          toast.error('Ocorreu um erro, por favor tente novamente.');
        },
      );

    // window.location.href = `mailto:atelier.relacao@gmail.com?subject=${formData.subject}&body=Nome: ${formData.name} %0D%0A Email: ${formData.email}  %0D%0A Numero de telefone: ${formData.phoneNumber} %0D%0A tipo: ${formData.option} %0D%0A Mensagem: ${formData.message} `;
  };

  return (
    <div className="m-3 md:m-5 rounded-xl bg-white p-2 ">
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-2 md:p-5 "
      >
        <FormControl
          sx={{
            '& .MuiFormLabel-root': {
              fontSize: '0.8rem',
            },
          }}
          className="space-y-3 md:space-y-4 w-full overflow-hidden"
        >
          <TextField
            {...register('name')}
            required
            className="text-xs"
            type="text"
            label="Nome"
            variant="standard"
          />
          <TextField
            {...register('email')}
            required
            label="Email"
            type="email"
            className=""
            variant="standard"
          />
          <TextField
            {...register('phoneNumber')}
            required
            label="Numero de telefone"
            className=""
            type="tel"
            variant="standard"
          />

          <Controller
            name="option"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                select
                variant="standard"
                label="Selecione o tipo de consulta"
                required
                className="flex-shrink"
                InputLabelProps={{ shrink: true }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <TextField
            {...register('subject')}
            required
            label="Assunto"
            type="text"
            variant="standard"
          />
          <TextField
            {...register('message')}
            required
            label="Mensagem"
            multiline
            rows={4}
            margin="dense"
          />
          <button
            type="submit"
            className="bg-darkGreenColor py-3 rounded-lg text-white font-bold hover:bg-darkGreenColor/80"
          >
            Submit
          </button>
        </FormControl>
      </form>
    </div>
  );
}

export default FormAppointments;
