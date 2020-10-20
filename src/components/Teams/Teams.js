import React from 'react'
import Table from "./Table"
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom"
import "../../styles/teams.scss"
import teams from "../../helpers/teams"

export default function Teams() {

  const history = useHistory()

    return (
      <div className="teams container-fluid">
        <Helmet>
          <title>Afriskaut - Teams</title>
        </Helmet>
        {/* <nav aria-label="breadcrumb" className="col-7">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Teams
            </li>
            <li class="breadcrumb-item">
              <a href="/">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav> */}
        <div className="row">
          <button
            className="btn btn-sm primary-btn small-btn ml-auto"
            onClick={() => history.push("/create-team")}
          >
            <i className="mdi mdi-vlc mr-2" />
            Create Team
          </button>
          <div className="col-12 mb-3">
            <p className="header">
              <i className="mdi mdi-vlc mr-2"></i>
              All Teams
            </p>
          </div>
        </div>
        <Table teams={teams} />
      </div>
    );
}
