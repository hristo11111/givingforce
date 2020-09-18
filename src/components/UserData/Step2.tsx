
import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { UserData } from 'interfaces';
import { useForm } from "react-hook-form";
import Form from 'components/generic/Form/Form';
import TextField from 'components/generic/TextField/TextField';
import CTASection from './CTASection/CTASection';

interface Props extends RouteComponentProps {
  myProp: boolean,
  userData: UserData,
  setUserData: any
}

const Step2 = ({ userData, setUserData, history }: Props) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data: UserData) => {
    setUserData(data);
    history.push("./thankyou");
  }

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <TextField formRegister={register} defaultValue={userData.email} name="email" label="Email:" />
      <CTASection onBackBtnClick={() => history.goBack()} />
    </Form>
  );
};

export default Step2;
