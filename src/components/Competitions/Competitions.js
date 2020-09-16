import React from "react";
import Table from "./Table";
import {RiTrophyLine} from "react-icons/ri"
import "../../styles/competition.scss";
import competitions from "../../helpers/competitions"

export default function Teams() {
  return (
    <div className="teams container-fluid">
      <div className="row">
        <div className="col-12 mb-3">
          <p className="header">
            <RiTrophyLine />
            Competitions
          </p>
        </div>
      </div>
      <Table teams={competitions} />
    </div>
  );
}
