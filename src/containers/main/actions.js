import createActions from '../../services/createActions';

const prefix = '@sigmaav2/app';

const types = ['SET_STATUS'];

const { setStatus } = createActions(prefix, types);

export default { setStatus };
