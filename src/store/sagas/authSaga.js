import { call, takeLatest, put } from "redux-saga/effects";
import { loginUnsuccessful, loginSuccessful } from "../actions/auth";
import { AUTH } from "../actions/types";
import { toast } from "react-toastify";
import axios from "axios";
import NProgress from "nprogress";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

function* handleLogin ({payload}) {
    const api = `${API_BASE_URL}/routes/login`;

    const apiCall = async () => {
      try {
        const result =  await axios(api, { method: "post", data: payload });
        return result;
      } catch (error) {
        console.log(error)
        throw error;
      }
    };
  
    try {
      NProgress.start();
      const { data } = yield call(apiCall);
      console.log(data)
  
    //   yield put(loginSuccessful());
    } catch (error) {
      return error;
    } finally {
      NProgress.done();
    }
}


const authSaga = [
    takeLatest(AUTH.LOGIN, handleLogin),
  ];
  
  export default authSaga;