import React from 'react';
import { Wrapper, ImageWrapper, FormWrapper } from './index.styed';
import LoginForm from '../../components/LoginForm';

const Login = () => (
    <Wrapper>
        {' '}
        <ImageWrapper>Holi</ImageWrapper>
        <FormWrapper>
            <LoginForm />
        </FormWrapper>{' '}
    </Wrapper>
);

export default Login;
