import React, { useEffect, useState } from "react";
import "../../styles/start-match.scss";
import Field from "../../assets/football_field.png";
import { useLocation } from "react-router-dom";
import players from "../../helpers/players";
import Board from "./Board";
import Timer from "./Timer";
import Chip from "@material-ui/core/Chip";
import { FiCheck } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Table from "./Table";
import { formatTime } from "../../helpers/utils";
import Events from "./Events";

export default function StartMatch() {
  const location = useLocation();
  const [homePlayers, setHomePlayers] = useState({ first: [], second: [] });

  const [playerEvents, setPlayerEvents] = useState([]);
  const [outcome, setOutcome] = useState(false);
  const [showTimeField, setShowTimeField] = useState(false);
  const [time, setTime] = useState({
    start: "00:00",
    stop: "00:00",
  });

  const [timer, setTimer] = useState(0);

  const [editEventObject, setEditEventObject] = useState({
    status: false,
    index: 0,
  });

  const addTime = () => {
    if (editEventObject.status === true) {
      playerEvents[editEventObject.index].start_time = formatTime(timer);
      playerEvents[editEventObject.index].stop_time = formatTime(timer + 2);
    } else {
      playerEvents[playerEvents.length - 1].start_time = formatTime(timer);
      playerEvents[playerEvents.length - 1].stop_time = formatTime(timer + 2);
    }

    setPlayerEvents([...playerEvents]);
    setShowTimeField(false);
    setEditEventObject({ ...editEventObject, status: false });
  };

  useEffect(() => {
    console.log(playerEvents);
  }, [playerEvents]);

  const addEvent = (player) => {
    setEditEventObject({ ...editEventObject, status: false });
    if (playerEvents.length === 0) {
      setPlayerEvents([
        {
          id: player._id,
          name: player.name,
          event: "",
          type: "",
          outcome: "",
          start_time: "",
          stop_time: "",
        },
      ]);
    } else if (
      playerEvents.length &&
      playerEvents[playerEvents.length - 1].event !== "" &&
      playerEvents[playerEvents.length - 1].type !== "" &&
      playerEvents[playerEvents.length - 1].outcome !== "" &&
      playerEvents[playerEvents.length - 1].start_time !== "" &&
      playerEvents[playerEvents.length - 1].stop_time !== ""
    ) {
      setPlayerEvents([
        ...playerEvents,
        {
          id: player.number,
          name: player.name,
          event: "",
          type: "",
          outcome: "",
          start_time: "",
          stop_time: "",
        },
      ]);
    }
  };

  const handleDelete = (index) => {
    playerEvents.splice(index, 1);
    setPlayerEvents([...playerEvents]);
  };

  const addAction = ({ event, type }) => {
    if (playerEvents.length === 0) return;

    if (editEventObject.status === true) {
      playerEvents[editEventObject.index].event = event;
      playerEvents[editEventObject.index].type = type;
    } else {
      playerEvents[playerEvents.length - 1].event = event;
      playerEvents[playerEvents.length - 1].type = type;
    }

    setPlayerEvents([...playerEvents]);
    setOutcome(true);
  };

  const addOutcome = (outcomeValue) => {
    if (playerEvents.length === 0) return;

    if (editEventObject.status === true) {
      playerEvents[editEventObject.index].outcome = outcomeValue;
    } else {
      playerEvents[playerEvents.length - 1].outcome = outcomeValue;
    }

    setPlayerEvents([...playerEvents]);
    setOutcome(false);
    addTime();
  };

  const cancelEdit = () => {
    setShowTimeField(false);
    setOutcome(false);
    setEditEventObject({
      ...editEventObject,
      status: false,
    });
  };

  useEffect(() => {
    setHomePlayers({
      first: [...players.slice(0, players.length / 2)],
      second: [
        ...players
          .sort((a, b) => a.number - b.number)
          .slice(players.length / 2, players.length),
      ],
    });
  }, []);

  return (
    <div className="container-fluid start-match">
      <div className="row pt-2">
        <div className="col-4 pl-5">
          <p className="text-muted mb-0">08/10/20</p>
          <p className="text-muted">Nigeria Professional Premier League</p>
          <h6>
            {location?.state?.home_team} vs {location?.state?.away_team}
          </h6>
        </div>
        <div className="col-4 text-center">
          <Timer timer={timer} setTimer={setTimer} />
        </div>
        <div className="col-12 mt-5 row px-5">
          <div className="col-lg-2">
            <h6>
              <i className="mdi mdi-strategy mr-2" />
              {location?.state?.home_team}
            </h6>
            <p className="mb-1 mt-3 text-muted">Starting line-up</p>
            <ul>
              {homePlayers.first.slice(0, 10).map((player) => (
                <li
                  className="players"
                  key={player.id}
                  onClick={() => addEvent(player)}
                >
                  <span>{player.number}</span> {player.name}
                </li>
              ))}
            </ul>
            <p className="mb-1 mt-2 text-muted">Substitutions</p>
            <ul>
              {homePlayers.second.slice(0, 5).map((player) => (
                <li className="players" key={player.id}>
                  <span>{player.number}</span> {player.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="col-12 field">
              <div className="row">
                <div className="col-6">
                  <img src={Field} alt="field" />
                  <div className="field-players">
                    <div className="board">
                      <div className="home">
                        <Board
                          players={homePlayers.first}
                          addEvent={addEvent}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <img src={Field} alt="field" />
                  <div className="field-players">
                    <div className="board">
                      <div className="away">
                        <Board
                          players={homePlayers.second}
                          addEvent={addEvent}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h6 className="mb-1">
                  <i className="mdi mdi-shoe-print mdi-18px mr-2" />
                  Events{" "}
                  {editEventObject.status && (
                    <small
                      className="text-primary ml-1 pointer"
                      onClick={() => cancelEdit()}
                    >
                      cancel editing
                    </small>
                  )}
                  {outcome && (
                    <i className="button-group ml-2">
                      <Chip
                        clickable
                        label={<FiCheck />}
                        onClick={() => addOutcome("successful")}
                        color="primary"
                      />
                      <Chip
                        clickable
                        label={<MdClose />}
                        onClick={() => addOutcome("unsuccessful")}
                        color="secondary"
                      />
                    </i>
                  )}
                  {showTimeField && (
                    <>
                      <input
                        className="input-time-field"
                        placeholder=" start time ( 23:10 )"
                        onChange={(e) =>
                          setTime({ ...time, start: e.target.value })
                        }
                      />
                      <input
                        className="input-time-field"
                        placeholder="stop time ( 23:11 )"
                        onChange={(e) =>
                          setTime({ ...time, stop: e.target.value })
                        }
                      />
                      <button
                        className="btn btn-sm btn-primary ml-1"
                        onClick={(e) => addTime(e)}
                      >
                        Submit
                      </button>
                    </>
                  )}
                </h6>

                <div className="events mt-2 px-2 pt-2">
                  <Events addAction={addAction} />
                </div>
              </div>
              <div className="mt-4">
                <h6>
                  <i className="mdi mdi-timeline-outline mdi-18px mr-2" />
                  Timeline
                </h6>

                <div className="timeline mt-2">
                  <div className="header">
                    <Table
                      playerEvents={playerEvents}
                      handleDelete={handleDelete}
                      setEditEventObject={setEditEventObject}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 text-right">
            <h6>
              <i className="mdi mdi-strategy mr-2" />
              {location?.state?.away_team}
            </h6>
            <p className="mb-1 mt-3 text-muted">Starting line-up</p>
            <ul>
              {homePlayers.first.slice(0, 10).map((player) => (
                <li
                  className="players"
                  key={player.id}
                  onClick={() => addEvent(player)}
                >
                  {player.name} <span>{player.number}</span>
                </li>
              ))}
            </ul>
            <p className="mb-1 mt-2 text-muted">Substitutions</p>
            <ul>
              {homePlayers.second.slice(0, 5).map((player) => (
                <li className="players">
                  {player.name} <span>{player.number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
