import React from 'react';

interface messageProps {
    title: React.ReactNode,
    paragraph: React.ReactNode
}

const Message: React.FC<messageProps> = ({ title, paragraph }) => {
  return (
    <div className='flex items-center flex-col'>
        <h1 className='w-8/12 pb-4 inconsolata-extrabold text-neutral xl:text-5xl md:text-4xl text-3xl'>{title}</h1>
        <p className='w-7/12 inconsolata-regular text-neutral-300 text-sm md:text-base xl:text-lg'>{paragraph}</p>
    </div>
  );
}

export default Message;