
import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { UserData } from 'interfaces';
import { useForm } from "react-hook-form";
import Form from 'components/generic/Form/Form';
import TextField from 'components/generic/TextField/TextField';
import CTASection from './CTASection/CTASection';

interface Props extends RouteComponentProps {
  userData: UserData,
  setUserData: Function
}

const Step1 = ({ userData, setUserData, history }: Props) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data: UserData) => {
    setUserData(data);
    history.push("./step2");
  }

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <TextField formRegister={register} defaultValue={userData.firstName} name="firstName" label="First name:" />
      <TextField formRegister={register} defaultValue={userData.lastName} name="lastName" label="Last name:" />
      <CTASection />
    </Form>
  );
};

export default Step1;
