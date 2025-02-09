import React from 'react';
import FormElement from './FormElement';
import UploadPhotoElement from './UploadPhotoElement';

const Form: React.FC = () => {
  return (
    <form className='z-1 flex flex-col items-start md:w-6/12 w-9/12 pt-4 xl:pt-6'>
        <UploadPhotoElement title="Upload Avatar" htmlFor="" />
        <FormElement title="Full Name" htmlFor="" type="text" />
        <FormElement title="Email Address" htmlFor="" type="text" placeholder='example@email.com' />
        <FormElement title="Github Username" htmlFor="" type="text" placeholder='@yourusername' />
        <button type='submit' className='hover:cursor-pointer hover:bg-orange-700 mt-6 inconsolata-bold text-black bg-orange-500 w-full p-2 rounded-md'>Generate My Ticket</button>        
    </form>
  );
}

export default Form;