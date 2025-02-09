import React from 'react'
// Images
import ticketOutline from "../assets/images/pattern-ticket.svg";
import codingConfLogo from "../assets/images/logo-full.svg";
import githubIcon from "../assets/images/icon-github.svg";

interface ticketPropTypes {
    fullName: string;
    github: string;
    avatar: string;
}

const Ticket:React.FC<ticketPropTypes> = ({fullName, github, avatar}) => {
  return (
    <div className='md:mt-16 mt-10 relative bg-center p-4 bg-cover md:w-[600px] md:h-[280px] w-[400px] h-[187px] bg-[url(assets/images/pattern-ticket.svg)]' >
        <div className='absolute top-5 left-5 flex flex-col'>
        <img src={codingConfLogo} alt="Coding conference logo" />
        <p className='text-neutral-300 inconsolata-regular pl-12 text-sm md:text-base'>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div className='absolute bottom-5 left-5 flex flex-row'>
            <img src={avatar} alt="Avatar" className='w-8 h-8' />
            <div className='flex flex-col'>
                <p className='text-neutral inconsolata-medium text-lg md:text-xl'>{fullName}</p>
                <div className='flex flex-row'>
                    <img src={githubIcon} alt="Github icon" className='mr-1 w-5 h-5 md:w-6 md:h-6' />
                    <p className='text-neutral-300 inconsolata-regular text-sm md:text-base'>{github}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ticket