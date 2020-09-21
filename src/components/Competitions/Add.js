import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/create-team.scss";
import { RiTrophyLine } from "react-icons/ri";

export default function CreateTeam() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/add-players");
  };

  return (
    <div className="create-team container-fluid mb-3">
      <div className="row">
        <div className="col-12">
          <p className="header">
            <RiTrophyLine /> Create Competition
          </p>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-lg-6 px-lg-4">
          <form autoComplete="off">
            <div className="form-group">
              <label>Competition Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nigeria Professional Football League"
              />
            </div>
            <div className="form-group">
              <label>Abbreviation</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="NPFL"
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nigeria"
              />
            </div>
            <div className="form-group">
              <label>Season</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="2020/2021"
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select className="form-control">
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
                name="name"
                placeholder="20"
              />
            </div>

            <div className="form-group">
              <label>Competition Image</label>
              <input
                className="form-control"
                type="file"
                name="name"
                placeholder="2020/2021"
              />
            </div>

            <button
              className="btn primary-btn form-control mt-2"
              onClick={handleSubmit}
            >
              Create Competition
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
