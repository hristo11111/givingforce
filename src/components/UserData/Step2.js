
import React from 'react';
import { useForm } from "react-hook-form";
import Form from './../generic/Form/Form';
import TextField from './../generic/TextField/TextField';

const Step2 = ({ userData, setUserData, history }) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    setUserData(data);
    history.push("./thankyou");
  }

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <span>Email:</span>
      <TextField formRegister={register} defaultValue={userData.email} name="email" />
      <input type="submit" />
    </Form>
  );
};

export default Step2;
