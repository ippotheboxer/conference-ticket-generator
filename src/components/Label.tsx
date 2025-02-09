import React from 'react';

interface formElementProps {
    title: string,
    htmlFor?: string
}

const Label: React.FC<formElementProps> = ({ title, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className='text-neutral-300 pt-4 xl:text-lg text-base inconsolata-medium'>
        {title}
    </label>
  );
}

export default Label;