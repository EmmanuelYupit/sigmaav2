import React from 'react';
import { Card, Container, LoginTitle, ImgCard } from './index.styed';
import imgLogin from '../../assets/images/Sch.jpg';
import LoginForm from '../../components/LoginForm';

const Login = () => (
    <Card>
        <ImgCard src={imgLogin} alt="Avatar" />
        <Container>
            <LoginTitle>
                <b>INGRESAR A SIGMAA</b>
            </LoginTitle>
            <LoginForm />
        </Container>
    </Card>
);

export default Login;
