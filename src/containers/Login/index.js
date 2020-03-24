import React from 'react';
import {
  Card,
  Container,
  LoginTitle,
  ImgCard,
  ImgLittleCard,
} from './index.styed';
import imgLogin from '../../assets/images/Sch.jpg';
import imgHeader from '../../assets/images/ucaribe_logo.jpg';
import LoginForm from '../../components/LoginForm';

const Login = () => (
  <Card>
    <ImgCard src={imgLogin} alt="Avatar" />
    <Container>
      <ImgLittleCard src={imgHeader} alt="Logo de Unicaribe" />
      <LoginTitle>
        <b>INGRESAR A SIGMAA</b>
      </LoginTitle>
      <LoginForm />
    </Container>
  </Card>
);

export default Login;
