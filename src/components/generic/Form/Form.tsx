import React from 'react';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode,
}

const Form = ({ onSubmit, children }: Props) => {
  return (
    <form onSubmit={onSubmit} className="ui form">
      {children}
    </form>
  );
};

export default Form;
