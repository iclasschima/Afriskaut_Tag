import React, { useEffect, useState } from "react";
import "../../styles/add-match.scss";
import { useHistory } from "react-router-dom";
import { fetchCompetitions } from "../../store/actions/competition";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeam } from "../../store/actions/team";

import { addMatch } from "../../store/actions/match";

export default function AddMatch(props) {
  const [data, setData] = useState({});
  const { competitions } = useSelector((state) => state.competition);
  const { teams } = useSelector((state) => state.team);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMatch({ data, history: props.history }));
  };

  useEffect(() => {
    dispatch(fetchCompetitions());
    dispatch(fetchTeam());
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const lineup = () => {
    history.push({
      pathname: "/match/lineup/1R1dad21n-ak22-jHYE21iD",
      state: {
        home_team: "Enyimba FC",
        away_team: "Akwa United FC",
      },
    });
  };

  return (
    <div className="add-match container-fluid">
      <div className="row mb-0 mt-2">
        <p className="header">
          <i className="mdi mdi-soccer mr-1" /> Add Match
        </p>
        <button
          className="btn btn-xs primary-btn ml-auto"
          onClick={() => history.push("/matches")}
        >
          <i className="mdi mdi-arrow-left mr-1" />
          Back
        </button>
      </div>

      <div className="row mt-4 justify-content-center inner-content-wrapper">
        <div className="col-lg-6">
          <form>
            <div className="form-group">
              <label>Choose Competition</label>
              <select
                onChange={handleChange}
                name="competition_id"
                className="form-control"
              >
                <option>Select Competition</option>
                {competitions?.map((competition) => {
                  return (
                    <>
                      {competition?.name && (
                        <option key={competition._id} value={competition._id}>
                          {competition.name}
                        </option>
                      )}
                    </>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Choose Home Team</label>
              <select
                onChange={handleChange}
                name="team_A_id"
                className="form-control"
              >
                <option>Select Home Team</option>
                {teams?.map((team) => {
                  return (
                    <>
                      {team?.name && (
                        <option
                          key={team._id}
                          value={team._id}
                          disabled={team._id === data.team_B_id}
                        >
                          {team.name}
                        </option>
                      )}
                    </>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Choose Away Team</label>
              <select
                onChange={handleChange}
                name="team_B_id"
                className="form-control"
              >
                <option>Select Away Team</option>
                {teams?.map((team) => {
                  return (
                    <>
                      {team?.name && (
                        <option
                          key={team._id}
                          value={team._id}
                          disabled={team._id === data.team_A_id}
                        >
                          {team.name}
                        </option>
                      )}
                    </>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                onChange={handleChange}
                name="location"
                className="form-control"
                placeholder="Lagos State Stadium, Surulere"
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                onChange={handleChange}
                name="date"
                type="date"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                onChange={handleChange}
                name="time"
                type="time"
                className="form-control"
              />
            </div>

            <button
              className="btn primary-btn mt-2"
              onClick={handleSubmit}
              // data-toggle="modal"
              // data-target="#add_match"
            >
              Add Match
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        id="add_match"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="add_match"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <small className="modal-title" id="exampleModalLabel">
                Start the match now?
              </small>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className=" text-center">
                <div></div>
                <button
                  className="btn btn-sm p-2 px-3 mr-1 btn-danger"
                  style={{ fontSize: "12px" }}
                >
                  No
                </button>
                <button
                  className="btn btn-sm primary-btn p-2"
                  style={{ fontSize: "12px" }}
                  data-dismiss="modal"
                  onClick={lineup}
                >
                  Yes, start match
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-xs btn-light"
                data-dismiss="modal"
              >
                <small>Close</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
