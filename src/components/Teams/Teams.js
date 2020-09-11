import React from 'react'
import Table from "./Table"
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
        <div className="teams">
            <Table teams={teams} />
        </div>
    )
}
