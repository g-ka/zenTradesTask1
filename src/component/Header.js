import React from 'react';
import logo from '../assets/image/home/header/zenTrades_logo.png';

const Header = () => {
  return (
    <header>
      <div className='top_section'>
        <img src={logo} className='top_section_logo' />
        <p className='top_section_task'>
          Task-1
        </p>
      </div>      
    </header>
  )
}

export default Header