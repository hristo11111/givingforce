import React from 'react';

const TextField = ({ formRegister = null, defaultValue, name, label }) => {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input 
        type="text" 
        name={name}
        ref={formRegister}  
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default TextField;
