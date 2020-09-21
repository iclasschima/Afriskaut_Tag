import React from 'react'
import { useHistory } from "react-router-dom"
import "../../styles/create-team.scss"
import { BiClipboard } from "react-icons/bi";
import TextField from "@material-ui/core/TextField";

export default function CreateTeam() {

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push("/add-players")
  }
  
    return (
      <div className="create-team container-fluid">
        <div className="row">
          <div className="col-12">
            <p className="header">
              <BiClipboard /> Create New Team
            </p>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-5">
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
                <input
                  className="form-control"
                  type="file"
                  name="name"
                />
              </div>
              <button
                className="btn primary-btn form-control mt-2"
                onClick={handleSubmit}
              >
                Create Team
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
