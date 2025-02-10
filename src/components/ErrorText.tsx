import React from 'react';
import infoIcon from "../assets/images/icon-info.svg";

interface ErrorTextPropTypes {
    errorText: string
}

const ErrorText: React.FC<ErrorTextPropTypes> = ({errorText}) => {
  return (
    <div className='flex flex-row items-center'>
        <p className="text-orange-500 text-xs md:text-sm pt-1 inconsolata-medium">
            <img src={infoIcon} alt="Information icon" className='inline-block mr-1 w-4 h-4' />
            {errorText}
        </p>
    </div>
  );
}

export default ErrorText;