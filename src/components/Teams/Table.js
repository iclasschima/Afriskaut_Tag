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
         label: "Club Name",
         field: "name",
         width: 150,
         sort: "asc",
       },
       {
         label: "League",
         field: "league",
         width: 150,
         sort: "asc",
       },
       {
         label: "Country",
         field: "country",
         width: 150,
         sort: "asc",
       }
     ],

     rows: teams.map((data, index) => {
       return {
         serial_number: index + 1,
         name: <a href="/">{data.club_name}</a>,
         league: data.league,
         country: data.country,
       };
     }),
   };

   return <MDBDataTable data={data} />;
}
