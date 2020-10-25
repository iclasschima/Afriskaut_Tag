import React from "react";
import Table from "./Table";
import "../../styles/competition.scss";
import competitions from "../../helpers/competitions";
import { useHistory } from "react-router-dom";

export default function Teams() {
  const history = useHistory();

  return (
    <div className="competitions container-fluid">
      <div className="row my-4">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <p className="header">
            <i className="mdi mdi-trophy-outline mr-2" />
            Competitions
          </p>

          <button
            className="btn btn-xs primary-btn ml-auto"
            onClick={() => history.push("/add-competition")}
          >
            <i className="mdi mdi-plus mr-1" />
            Create Competition
          </button>
        </div>
      </div>
      <div className=" inner-content-wrapper py-4 px-3">
        <Table teams={competitions} />
      </div>
    </div>
  );
}
