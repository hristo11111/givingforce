import React from 'react';

type Props = {
  formRegister?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined,
  defaultValue?: string | number | readonly string[] | undefined,
  name: string | undefined,
  label?: string | null | undefined
}

const TextField = ({ formRegister = null, defaultValue, name, label }: Props) => {
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
