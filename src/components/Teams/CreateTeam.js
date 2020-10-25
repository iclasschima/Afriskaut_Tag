import React from 'react'
import { useHistory } from "react-router-dom"
import "../../styles/create-team.scss"

export default function CreateTeam() {

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push("/add-players")
  }
  
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
                <label>Club Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enymiba Football Club"
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
                <label>Club Image</label>
                <input className="form-control" type="file" name="name" />
              </div>
              <button className="btn primary-btn mt-2" onClick={handleSubmit}>
                Add Team
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
