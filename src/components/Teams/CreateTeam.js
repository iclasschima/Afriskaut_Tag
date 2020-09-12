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
            <form>
              <TextField
                label="Club Name"
                fullWidth
                size="small"
                variant="outlined"
              />
              <TextField
                label="Country"
                fullWidth
                size="small"
                variant="outlined"
              />
              <TextField
                label="League Name"
                fullWidth
                size="small"
                variant="outlined"
              />
              <TextField
                label="Season"
                fullWidth
                size="small"
                variant="outlined"
              />
              <button className="btn primary-btn form-control" onClick={handleSubmit}>
                Create Team
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
