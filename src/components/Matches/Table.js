import React from "react";
import { MDBTableBody, MDBTable, MDBTableHead } from "mdbreact";
// import { formatTime } from "../../helpers/utils";

export default function Table({
  playerEvents,
  handleDelete,
  setEditEventObject,
}) {
  const data = {
    columns: [
      {
        label: "#",
        field: "sn",
        sort: "asc",
      },
      {
        label: "Player Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Event",
        field: "event",
        sort: "asc",
      },
      {
        label: "Type/Location",
        field: "type",
        sort: "asc",
      },
      {
        label: "Outcome",
        field: "outcome",
        sort: "asc",
      },
      {
        label: "Start Time",
        field: "start",
        sort: "asc",
      },
      {
        label: "Stop Time",
        field: "stop",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
      },
    ],
    rows: playerEvents.map((event, index) => {
      return {
        id: index + 1,
        name: event.name,
        event: event.event,
        type: event.type,
        outcome: event.outcome,
        start: event.start_time,
        stop: event.stop_time,
        action: [
          <i
            className="mdi mdi-pen text-primary"
            onClick={() => {
              setEditEventObject({ status: true, index });
            }}
          />,
          <i
            className="mdi mdi-trash-can text-danger"
            onClick={() => handleDelete(index)}
          />,
        ],
      };
    }),
  };

  return (
    <MDBTable hover fixed scrollY>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
}
