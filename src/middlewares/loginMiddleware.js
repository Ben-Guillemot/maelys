/* eslint-disable camelcase */
import * as actions from '../actions';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // login action
    case actions.SUBMIT_LOGIN: {
      const { login } = store.getState();

      return;
    }
    default:
      next(action);
  }
};

export default loginMiddleware;
