import React from 'react';
import Spinner from '../img/LoaderLarge.gif';

const Loader = () => {
  return (
    <div className='bg-mesh' style={{ height: '100vh' }}>
      <img src={Spinner} style={{ display: 'block', margin: 'auto' }} />
    </div>
  );
};

export default Loader;
