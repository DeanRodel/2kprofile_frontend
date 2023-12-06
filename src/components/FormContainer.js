import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className='grid grid-flow-col-dense '>
      {/* <div></div> */}
      <div className=''> {children}</div>
      {/* <div></div> */}
    </div>
  );
};

export default FormContainer;