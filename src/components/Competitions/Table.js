import React from "react";
import { MDBDataTable } from "mdbreact";

export default function Table({ teams }) {
  const data = {
    columns: [
      {
        label: "S/N",
        field: "serial_number",
        width: 100,
        sort: "asc",
      },
      {
        label: "Competition Name",
        field: "name",
        width: 150,
        sort: "asc",
      },
      {
        label: "Abbreviation",
        field: "league",
        width: 150,
        sort: "asc",
      },
      {
        label: "Country",
        field: "country",
        width: 150,
        sort: "asc",
      },

      {
        label: "Season",
        field: "season",
        width: 150,
        sort: "asc",
      },
      {
        label: "No. of Teams",
        field: "teams",
        width: 150,
        sort: "asc",
      },
    ],

    rows: teams.map((data, index) => {
      return {
        serial_number: index + 1,
        name: data.club_name,
        league: data.abbrev,
        country: data.country,
        teams: data.teams,
        season: data.season,
        clickEvent: () => console.log("Hello"),
      };
    }),
  };

  return <MDBDataTable hover data={data} />;
}
