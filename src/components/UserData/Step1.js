
import React from 'react';
import { useForm } from "react-hook-form";
import Form from './../generic/Form/Form';
import TextField from './../generic/TextField/TextField';

const Step1 = ({ userData, setUserData, history }) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    setUserData(data);
    history.push("./step2");
  }

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <span>First name:</span>
      <TextField formRegister={register} defaultValue={userData.firstName} name="firstName" />
      <span>Last name:</span>
      <TextField formRegister={register} defaultValue={userData.lastName} name="lastName" />
      <input type="submit" />
    </Form>
  );
};

export default Step1;
