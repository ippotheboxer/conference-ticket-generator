import React from 'react';

interface messageProps {
    title: React.ReactNode,
    paragraph: React.ReactNode
}

const Message: React.FC<messageProps> = ({ title, paragraph }) => {
  return (
    <div className='flex items-center flex-col'>
        <h1 className='md:w-8/12 w-10/12 pb-4 inconsolata-extrabold text-neutral xl:text-6xl md:text-5xl text-4xl'>{title}</h1>
        <p className='md:w-7/12 w-6/12 inconsolata-regular text-neutral-300 text-base md:text-lg'>{paragraph}</p>
    </div>
  );
}

export default Message;