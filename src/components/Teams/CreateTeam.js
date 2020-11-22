import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/create-team.scss";

export default function CreateTeam() {
  const history = useHistory();
  
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/add-players",
      state: data,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="create-team container-fluid">
      <div className="row">
        <p className="header">
          <i className="mdi mdi-vlc mr-1"></i> Add Team
        </p>
        <button
          className="btn btn-xs primary-btn ml-auto"
          onClick={() => history.push("/teams")}
        >
          <i className="mdi mdi-arrow-left mr-1" />
          Back
        </button>
      </div>
      <div className="row mt-3 justify-content-center inner-content-wrapper">
        <div className="col-6">
          <form autoComplete="off">
            <div className="form-group">
              <label>Team Name</label>
              <input
                className="form-control"
                type="text"
                name="team_name"
                value={data.team_name}
                placeholder="Enymiba Football Club"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Nick Name</label>
              <input
                className="form-control"
                type="text"
                name="nick_name"
                value={data.nick_name}
                placeholder="EFC"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                className="form-control"
                type="text"
                name="country"
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
            {/* <div className="form-group">
              <label>Club Image</label>
              <input className="form-control" type="file" name={data.img} />
            </div> */}
            <button className="btn primary-btn mt-2" onClick={handleSubmit}>
              Add Team
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
