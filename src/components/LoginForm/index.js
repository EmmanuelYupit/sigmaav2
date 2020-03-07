import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        const {
            target: { name, value },
        } = e;
        this.setState({ [name]: value });
    }

    handleLogin() {
        const {
            props: { onLogin },
            state: { user, password },
        } = this;
        onLogin({ user, password });
    }

    render() {
        const {
            state: { user, password },
            handleChange,
        } = this;
        return (
            <div>
                <TextField
                    type="user"
                    name="user"
                    value={user}
                    onChange={handleChange}
                />
                <TextField
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
        );
    }
}

export default Login;
