import React from 'react';
import logoImg from "../assets/images/logo-full.svg";

const Header = () => {
  return (
    <header className='pt-4 md:pt-8'>
      <img 
      src={logoImg} 
      alt="Logo with text Coding Conference" 
      className='xl:w-48 md:w-40 w-36'
      />
    </header>
  );
}

export default Header;