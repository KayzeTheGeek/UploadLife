import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data, loading: false, erros: null};
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null};
    default:
      return state;
  }
};

export default authReducer;