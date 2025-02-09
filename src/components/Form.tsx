import React, { useState } from 'react';
import FormElement from './FormElement';
import UploadPhotoElement from './UploadPhotoElement';

interface FormData {
  avatar: string;
  fullName: string;
  email: string;
  github: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    avatar: "",
    fullName: "",
    email: "",
    github: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='z-1 flex flex-col items-start md:w-6/12 w-9/12 pt-4 xl:pt-6'>
        <UploadPhotoElement title="Upload Avatar" name='avatar' />
        <FormElement value={formData.fullName} name="fullName" title="Full Name" type="text" onChange={handleChange} />
        <FormElement value={formData.email} name="email" title="Email Address" type="text" onChange={handleChange} placeholder='example@email.com' />
        <FormElement value={formData.github} name="github" title="Github Username" type="text" onChange={handleChange} placeholder='@yourusername' />
        <button type='submit' className='hover:cursor-pointer hover:bg-orange-700 mt-6 inconsolata-bold text-black bg-orange-500 w-full p-2 rounded-md'>Generate My Ticket</button>        
    </form>
  );
}
