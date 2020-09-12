import React from 'react'
import Table from "./Table"
import { BiClipboard } from "react-icons/bi";
import "../../styles/teams.scss"

export default function Teams() {

    const teams = [
      { club_name: "Eyimba FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Kano pillars FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Accra Hearts FC", league: "GFPL", country: "Ghana" },
      { club_name: "Eyimba FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Kano pillars FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Accra Hearts FC", league: "GFPL", country: "Ghana" },
      { club_name: "Eyimba FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Kano pillars FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Accra Hearts FC", league: "GFPL", country: "Ghana" },
      { club_name: "Eyimba FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Kano pillars FC", league: "NFPL", country: "Nigeria" },
      { club_name: "Accra Hearts FC", league: "GFPL", country: "Ghana" },
    ];

    return (
        <div className="teams container-fluid">
            <div className="row">
                <div className="col-12 mb-2">
                     <p className="header"> <BiClipboard /> Teams</p>
                </div>
            </div>
            <Table teams={teams} />
        </div>
    )
}
