import React from 'react';
import logo from './logo.png';  // Import the logo image

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className='img' alt='Logo' />
    </nav>
  );
}
