import React from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="ui form">
      {children}
    </form>
  );
};

export default Form;
