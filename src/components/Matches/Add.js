import React from "react";
import "../../styles/add-match.scss";
import { useHistory } from "react-router-dom"
import competitions from "../../helpers/competitions";
import teams from "../../helpers/teams";

export default function Add() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/add-players");
  };

  const history = useHistory()

  const lineup = () => {
    history.push({
      pathname: "/match/lineup/1R1dad21n-ak22-jHYE21iD",
      state: {
        home_team: "Enyimba FC",
        away_team: "Akwa United FC",
      },
    });
  }

  return (
    <div className="add-match container-fluid">
      <div className="row">
        <div className="col-12">
          <p className="header">
            <i className="mdi mdi-soccer mr-1" /> Create Match
          </p>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-lg-6">
          <form>
            <div className="form-group">
              <label>Choose Competition</label>
              <select className="form-control">
                <option>Select Competition</option>
                {competitions.map((competition) => {
                  return (
                    <option value={competition.id}>
                      {competition.competition_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Choose Home Team</label>
              <select className="form-control">
                <option>Select Home Team</option>
                {teams.map((team) => {
                  return <option value={team.id}>{team.team_name}</option>;
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Choose Away Team</label>
              <select className="form-control">
                <option>Select Away Team</option>
                {teams.map((team) => {
                  return (
                    <option value={team.id} disabled={team.id === 2}>
                      {team.team_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                className="form-control"
                placeholder="Lagos State Stadium, Surulere"
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input type="date" className="form-control" />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input type="time" className="form-control" />
            </div>

            <div className="form-group">
              <label>Refree</label>
              <input className="form-control" placeholder="Mr A.O Adeyemi" />
            </div>

            <button
              className="btn primary-btn form-control mt-2"
              onClick={handleSubmit}
              data-toggle="modal"
              data-target="#add_match"
            >
              ADD MATCH
            </button>
          </form>
        </div>
      </div>

      <div
        class="modal fade"
        id="add_match"
        tabindex="-1"
        role="dialog"
        aria-labelledby="add_match"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <small class="modal-title" id="exampleModalLabel">
                Start the match now?
              </small>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
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
