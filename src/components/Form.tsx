import React from 'react';
import FormElement from './FormElement';
import UploadPhotoElement from './UploadPhotoElement';

const Form = () => {
  return (
    <form className='flex flex-col items-start w-6/12'>
        <UploadPhotoElement title="Upload Avatar" htmlFor="" />
        <FormElement title="Full Name" htmlFor="" type="text" />
        <FormElement title="Email Address" htmlFor="" type="text" placeholder='example@email.com' />
        <FormElement title="Github Username" htmlFor="" type="text" placeholder='@yourusername' />
        <button type='submit' className='mt-6 inconsolata-bold text-black bg-orange-500 w-full p-2 rounded-md'>Generate My Ticket</button>        
    </form>
  );
}

export default Form;