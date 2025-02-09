import React from 'react';
import logoImg from "../assets/images/logo-full.svg";

const Header:React.FC = () => {
  return (
    <header className='pt-6 md:pt-8 pb-6 md:pb-8'>
      <img 
      src={logoImg} 
      alt="Logo with text Coding Conference" 
      className='xl:w-48 md:w-40 w-36'
      />
    </header>
  );
}

export default Header;