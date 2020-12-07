import React from "react";
import { MDBDataTable } from "mdbreact";
import { useHistory } from "react-router-dom";

export default function Table({ competitions }) {
  const history = useHistory();

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
    ],

    rows: competitions.map((competition, index) => {
      return {
        serial_number: index + 1,
        name: competition.name,
        league: competition.abbrev,
        country: competition.type,
        teams: competition.country,
        clickEvent: () => {
          console.log(competition);
          history.push({
            pathname: `/matches/${competition?.name}`,
            state: competition,
          });
        },
      };
    }),
  };

  return <MDBDataTable hover data={data} />;
}
