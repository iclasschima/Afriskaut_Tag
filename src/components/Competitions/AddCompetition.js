import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/create-team.scss";
import { addCompetition } from "../../store/actions/competition";
import { useDispatch } from "react-redux";

export default function CreateTeam(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    competition_name: "",
    abbrev: "",
    type: "",
    competition_country: "",
    season: "",
    no_of_teams: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCompetition({ data: state, history: props.history }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="create-team container-fluid mb-3">
      <div className="row mb-0">
        <p className="header">
          <i className="mdi mdi-trophy-outline mr-1" /> Create Competition
        </p>
        <button
          className="btn btn-xs primary-btn ml-auto"
          onClick={() => history.push("/competitions")}
        >
          <i className="mdi mdi-arrow-left mr-1" />
          Back
        </button>
      </div>
      <div className="row mt-4 justify-content-center inner-content-wrapper">
        <div className="col-lg-6 px-lg-4">
          <form autoComplete="off">
            <div className="form-group">
              <label>Competition Name</label>
              <input
                className="form-control"
                type="text"
                name="competition_name"
                placeholder="Nigeria Professional Football League"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Abbreviation</label>
              <input
                className="form-control"
                type="text"
                name="abbrev"
                placeholder="NPFL"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                className="form-control"
                type="text"
                name="competition_country"
                placeholder="Nigeria"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Season</label>
              <input
                className="form-control"
                type="text"
                name="season"
                placeholder="2020/2021"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                name="type"
                onChange={handleChange}
              >
                <option>Select type</option>
                <option>League</option>
                <option>Cup</option>
              </select>
            </div>

            <div className="form-group">
              <label>Max Number of Teams</label>
              <input
                className="form-control"
                type="number"
                name="no_of_teams"
                placeholder="20"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Competition Image</label>
              <input
                className="form-control"
                type="file"
                name="image"
                onChange={handleChange}
              />
            </div>

            <button className="btn primary-btn mt-2" onClick={handleSubmit}>
              Create Competition
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
