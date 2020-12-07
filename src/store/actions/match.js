import { MATCH } from "./types";

const addMatch = ({ data, history }) => ({
  type: MATCH.ADD_MATCH,
  payload: data,
  history,
});

const fetchMatches = (id) => ({
  type: MATCH.FETCH_MATCHES,
  payload: id
})

const fetchMatchesSuccess = (data) => ({
  type: MATCH.FETCH_MATCHES_SUCCESS,
  payload: data
})



export { addMatch, fetchMatches, fetchMatchesSuccess };
