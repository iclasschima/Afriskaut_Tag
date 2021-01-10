import { AUTH } from "../actions/types";

const authReducer = (state = { isLoggedIn: false }, { type, payload }) => {
  switch (type) {
    case AUTH.LOGIN_SUCCESSFUL:
      return { ...state, isLoggedIn: true };

    case AUTH.LOGIN_UNSUCCESSFUL:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};

export default authReducer;
