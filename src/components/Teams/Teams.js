import React from "react";
import Table from "./Table";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import "../../styles/teams.scss";
import teams from "../../helpers/teams";

export default function Teams() {
  const history = useHistory();

  return (
    <div className="teams container-fluid">
      <Helmet>
        <title>Afriskaut - Teams</title>
      </Helmet>

      <div className="row my-4">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <p className="header">
            <i className="mdi mdi-vlc mr-2" />
            All Teams
          </p>

          <button
            className="btn btn-xs primary-btn ml-auto"
            onClick={() => history.push("/add-team")}
          >
            <i className="mdi mdi-plus mr-1" />
            Add Team
          </button>
        </div>
      </div>
      <div className="inner-content-wrapper px-3 py-4">
        <Table teams={teams} />
      </div>
    </div>
  );
}
