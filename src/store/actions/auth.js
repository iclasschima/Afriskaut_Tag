import { AUTH } from "./types";

const login = (data) => ({
  type: AUTH.LOGIN,
  payload: data,
});

const loginSuccessful = () => ({
  type: AUTH.LOGIN_SUCCESSFUL
})

const loginUnsuccessful = () => ({
  type: AUTH.LOGIN_UNSUCCESSFUL
})

export { login, loginSuccessful, loginUnsuccessful };
