import { takeLatest, call, put } from "redux-saga/effects";
import { MATCH } from "../actions/types"
import { fetchMatchesSuccess } from "../actions/match";
import { toast } from "react-toastify";
import axios from "axios";
import NProgress from "nprogress";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

function* handleAddMatch({ payload, history }) {
  const api = `${API_BASE_URL}/routes/create-match`;

  const apiCall = async () => {
    try {
      const result = await axios(api, { method: "post", data: payload });
      return result;
    } catch (error) {
      throw error;
    }
  };

  try {
    NProgress.start();
    const result = yield call(apiCall);

    if (result.data.status === 200) {
      toast.success(result.data.message);
      history.push("/matches");
    } else {
      toast.error(result.data.message);
    }
  } catch (error) {
    console.log(error);
  } finally {
    NProgress.done();
  }
}

function* handleFetchMatches({ payload }) {
  const api = `${API_BASE_URL}/routes/all-match`;

  const apiCall = async () => {
    try {
      const result = await axios(api, {
        method: "post",
        data: { season_id: payload },
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  try {
    NProgress.start();
    const result = yield call(apiCall);

    if (result.data.status === 200) {
      yield put(fetchMatchesSuccess(result.data.data.matches))
    } else {
      toast.error(result.data.message);
    }
  } catch (error) {
    console.log(error);
  } finally {
    NProgress.done();
  }
}

const matchSaga = [
  takeLatest(MATCH.ADD_MATCH, handleAddMatch),
  takeLatest(MATCH.FETCH_MATCHES, handleFetchMatches),
];

export default matchSaga;
