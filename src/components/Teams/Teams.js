import React from 'react'
import Table from "./Table"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet";
import { BiClipboard } from "react-icons/bi";
import "../../styles/teams.scss"
import teams from "../../helpers/teams"

export default function Teams() {

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
          <div className="col-12 mb-3">
            <p className="header">
              {" "}
              <BiClipboard />
              All Teams
            </p>
          </div>
        </div>
        <Table teams={teams} />
      </div>
    );
}
