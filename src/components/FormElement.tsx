import React from 'react';
import Label from './Label';

interface formElementProps {
    title: string,
    htmlFor: string,
    type: string,
    placeholder?: string,
    accept?: string
}

const FormElement: React.FC<formElementProps> = ({ title, htmlFor, placeholder, type, accept }) => {
  return (
    <>
    <Label htmlFor={htmlFor} title={title} />
        <input 
        type={type}  
        placeholder={placeholder} 
        className='mt-2 w-full text-neutral bg-neutral/10 hover:bg-neutral/20 hover:cursor-pointer p-2 rounded-md border border-neutral-500 inconsolata-medium' 
        accept={accept} />
    </>
  );
}

export default FormElement;