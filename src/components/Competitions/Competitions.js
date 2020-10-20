import React from "react";
import Table from "./Table";
import "../../styles/competition.scss";
import competitions from "../../helpers/competitions"
import { useHistory } from "react-router-dom"

export default function Teams() {

  const history = useHistory()

  return (
    <div className="competitions container-fluid">
      <div className="row">
        <button
          className="btn primary-btn ml-auto"
          onClick={() => history.push("/add-competition")}
        >
          <i className="mdi mdi-trophy-outline mr-1" />
          Create Competition
        </button>
        <div className="col-12 mb-3">
          <p className="header">
            <i className="mdi mdi-trophy-outline mr-1" />
            Competitions
          </p>
        </div>
      </div>
      <Table teams={competitions} />
    </div>
  );
}
