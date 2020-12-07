import { MATCH } from "../actions/types";

const matchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case MATCH.FETCH_MATCHES_SUCCESS:
      return {...state, matches: payload};

    default:
      return state;
  }
};

export default matchReducer;
