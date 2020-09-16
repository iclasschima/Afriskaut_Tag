import React from 'react'
import Table from "./Table"
import { BiClipboard } from "react-icons/bi";
import "../../styles/teams.scss"
import teams from "../../helpers/teams"

export default function Teams() {

    return (
        <div className="teams container-fluid">
            <div className="row">
                <div className="col-12 mb-3">
                     <p className="header"> <BiClipboard />All Teams</p>
                </div>
            </div>
            <Table teams={teams} />
        </div>
    )
}
