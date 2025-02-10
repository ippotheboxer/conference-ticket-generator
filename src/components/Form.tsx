import React, { useState } from 'react';
import FormElement from './FormElement';
import UploadPhotoElement from './UploadPhotoElement';
import ErrorText from './ErrorText';
import infoIcon from "../assets/images/icon-info.svg"

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

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData({ ...formData, avatar: imageUrl });
  };

  const validateForm = ():boolean => {
    let newErrors: Partial<FormData> = {};

    if (!formData.avatar) {
      newErrors.avatar = "Please upload a photo.";
    } 

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    const githubRegex = /^[a-zA-Z0-9-]{3,}$/;
    if (!formData.github.trim()) {
      newErrors.github = "GitHub username is required.";
    } else if (!githubRegex.test(formData.github)) {
      newErrors.github = "Invalid GitHub username.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='z-1 flex flex-col items-start md:w-6/12 w-9/12 pt-4 xl:pt-6'>
        <UploadPhotoElement title="Upload Avatar" name='avatar' onImageUpload={handleImageUpload} />
        <FormElement value={formData.fullName} name="fullName" title="Full Name" type="text" onChange={handleChange} />
        {errors.fullName && <ErrorText errorText={errors.fullName} />}
        <FormElement value={formData.email} name="email" title="Email Address" type="text" onChange={handleChange} placeholder='example@email.com' />
        {errors.email && <ErrorText errorText={errors.email} />}
        <FormElement value={formData.github} name="github" title="Github Username" type="text" onChange={handleChange} placeholder='yourusername' />
        {errors.github && <ErrorText errorText={errors.github} />}
        <button type='submit' className='hover:cursor-pointer hover:bg-orange-700 mt-6 inconsolata-bold text-black bg-orange-500 w-full p-2 rounded-md'>Generate My Ticket</button>        
    </form>
  );
}
