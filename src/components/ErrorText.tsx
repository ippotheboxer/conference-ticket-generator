import React from 'react';
import InformationIcon from './InformationIcon';

interface ErrorTextPropTypes {
    errorText: string
}

const ErrorText: React.FC<ErrorTextPropTypes> = ({errorText}) => {
  return (
    <div className='flex flex-row items-center'>
        <p className="text-orange-500 text-xs md:text-sm pt-1 inconsolata-medium">
        <InformationIcon hasError={true} />
            {errorText}
        </p>
    </div>
  );
}

export default ErrorText;