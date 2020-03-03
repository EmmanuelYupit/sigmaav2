import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';

const App = ({ loggedIn }) => {
    if (!loggedIn) return <div>Not Logged In</div>;
    return <div>Logged In</div>;
};

App.propTypes = {
    loggedIn: PropTypes.bool,
};

App.defaultProps = {
    loggedIn: false,
};

export default connect(selectors.propsSelector)(App);
