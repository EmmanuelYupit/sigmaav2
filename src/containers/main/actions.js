import createActions from '../../services/createActions';

const prefix = '@sigmaav2/app';

const types = ['LOGIN', 'SET_STATUS'];

const { login, setStatus } = createActions(prefix, types);

export default {
    login,
    setStatus,
};
