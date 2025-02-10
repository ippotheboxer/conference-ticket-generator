import React from 'react';
import Label from './Label';

interface formElementProps {
    value: string;
    title: string;
    type: string;
    placeholder?: string;
    accept?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const FormElement: React.FC<formElementProps> = ({ value, name, title, placeholder, type, accept, onChange }) => {
  return (
    <>
    <Label title={title} htmlFor={name} />
        <input 
        type={type}  
        placeholder={placeholder} 
        className='mt-2 w-full text-neutral bg-neutral-300/15 hover:bg-neutral/20 hover:cursor-pointer p-2 rounded-md border border-neutral-500 inconsolata-medium' 
        accept={accept}
        onChange={onChange}
        value={value}
        name={name} />
    </>
  );
}

export default FormElement;