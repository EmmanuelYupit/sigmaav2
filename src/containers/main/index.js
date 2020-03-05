import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';
import { Grid } from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';

const App = ({ loggedIn }) => {
    if (!loggedIn)
        return (
            <Grid container item xs={12} justify="center">
                Not Logged In <AccessAlarm />
            </Grid>
        );
    return <div>Logged In</div>;
};

App.propTypes = {
    loggedIn: PropTypes.bool,
};

App.defaultProps = {
    loggedIn: false,
};

export default connect(selectors.propsSelector)(App);
