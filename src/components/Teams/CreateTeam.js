import React from 'react'
import "../../styles/create-team.scss"
import { BiClipboard } from "react-icons/bi";
import TextField from "@material-ui/core/TextField";

export default function CreateTeam() {
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
              <button className="btn primary-btn form-control">
                Create Team
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
