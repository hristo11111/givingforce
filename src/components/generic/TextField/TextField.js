import React from 'react';

const TextField = ({ formRegister = null, defaultValue, name }) => {
  return (
    <input 
      type="text" 
      name={name}
      ref={formRegister}  
      defaultValue={defaultValue}
    />
  );
};

export default TextField;
