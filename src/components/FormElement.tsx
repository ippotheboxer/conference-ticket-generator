import React from 'react';
import Label from './label';

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
        className='mt-1 w-full text-neutral bg-neutral/10 p-2 rounded-md border border-neutral-500 inconsolata-medium' 
        accept={accept} />
    </>
  );
}

export default FormElement;