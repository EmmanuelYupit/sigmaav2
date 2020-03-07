import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';
import Login from '../Login';
import Home from '../Home';
import { Grid } from '@material-ui/core';

const App = ({ loggedIn }) => {
    if (!loggedIn)
        return (
            <Grid>
                <Login />
            </Grid>
        );
    return <Home />;
};

App.propTypes = {
    loggedIn: PropTypes.bool,
};

App.defaultProps = {
    loggedIn: false,
};

export default connect(selectors.propsSelector)(App);
