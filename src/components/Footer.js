import React, { useEffect } from 'react';
import Logo from '../img/logos/logo-white.png';

const Footer = ({ showFooterLogo }) => {
  return (
    // <footer className='bg-opacity-40 bg-black items-center w-full h-16 sm:h-12 mt-auto inset-x-0 bottom-0 fix'>
    <footer className='bg-black items-center w-full h-16 sm:h-12 mt-auto inset-x-0 bottom-0 fix'>
      <div className='sm:flex justify-center mx-auto pt-2 sm:pt-0 items-center text-center'>
        {showFooterLogo && (
          <img className='w-24 mx-auto sm:mx-5 ' src={Logo} alt='ePleyer logo'></img>
        )}

        <p className='text-white text-xs'>
          Copyright © 2020-2021 | All Rights Reserved by ePleyer Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
