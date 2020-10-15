import React, { useEffect, useState } from "react";
import "../../styles/start-match.scss";
import Field from "../../assets/football_field.png";
import { useLocation } from "react-router-dom";
import players from "../../helpers/players";
import Timer from "react-compound-timer";
import Chip from "@material-ui/core/Chip";
import { Divider } from "semantic-ui-react";

export default function StartMatch() {
  const location = useLocation();
  const [homePlayers, setHomePlayers] = useState({ first: [], second: [] });

  // const [timer, setTimer] = useState(0);

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
      <div className="row pt-3">
        <div className="col-12 text-center">
          <p className="text-muted mb-0">08/10/20</p>
          <p className="text-muted">
            <i className="mdi mdi-flag-outline mr-2" />
            Nigeria Professional Premier League
          </p>
          <h6>
            {location?.state?.home_team} vs {location?.state?.away_team}
          </h6>
        </div>
        <div className="col-12 mt-4 text-center">
          <p className="text-muted">
            <i className="mdi mdi-timer-outline mr-2" />
            Timer
          </p>
          <Timer
            formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
            // initialTime={timer}
            // startImmediately={false}
            checkpoints={[
              {
                time: 100 * 60,
                callback: (time) => console.log(time),
              },
            ]}
          >
            {({ start, resume, pause, stop, reset, getTime }) => (
              <React.Fragment>
                <h6>
                  {" "}
                  <Timer.Minutes /> {": "}
                  <Timer.Seconds />
                </h6>

                {/* <span onClick={start} className="btn btn-xs primary-btn">
                    <i className="mdi mdi-play" />
                  </span>
                  <span
                    onClick={() => {
                      setTimer(getTime());
                      pause();
                    }}
                    className="btn btn-xs primary-btn"
                  >
                    <i className="mdi mdi-pause" />
                  </span>
                  <span onClick={reset} className="btn btn-xs primary-btn">
                    <i className="mdi mdi-restart" />
                  </span>
                  <span onClick={stop} className="btn btn-xs primary-btn">
                    <i className="mdi mdi-stop" />
                  </span> */}
              </React.Fragment>
            )}
          </Timer>
        </div>
        <div className="col-12 mt-5 row">
          <div className="col-lg-3">
            <h6>
              <i className="mdi mdi-strategy mr-2" />
              Line up for {location?.state?.home_team}
            </h6>
            <p className="mb-1 mt-3 text-muted">Starting line-up</p>
            <ul>
              {homePlayers.first.slice(0, 10).map((player) => (
                <li className="players">
                  <span>{player.number}</span> {player.name}
                </li>
              ))}
            </ul>
            <p className="mb-1 mt-2 text-muted">Substitutions</p>
            <ul>
              {homePlayers.second.slice(0, 5).map((player) => (
                <li className="players">
                  <span>{player.number}</span> {player.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6 pt-4">
            <div className="col-12 field">
              <img src={Field} alt="field" />
              <div className="field-players">
                <div className="board">
                  <div className="home">
                    <span className="btn gk">
                      {homePlayers?.first[0]?.number}
                    </span>
                    <span className="btn lb">
                      {homePlayers?.first[1]?.number}
                    </span>
                    <span className="btn cb1">
                      {homePlayers?.first[2]?.number}
                    </span>
                    <span className="btn cb2">
                      {homePlayers?.first[3]?.number}
                    </span>
                    <span className="btn rb">
                      {homePlayers?.first[4]?.number}
                    </span>
                    <span className="btn lm">
                      {homePlayers?.first[5]?.number}
                    </span>
                    <span className="btn cm">
                      {homePlayers?.first[6]?.number}
                    </span>
                    <span className="btn rm">
                      {homePlayers?.first[7]?.number}
                    </span>
                    <span className="btn lf">
                      {homePlayers?.first[8]?.number}
                    </span>
                    <span className="btn rf">
                      {homePlayers?.first[9]?.number}
                    </span>
                    <span className="btn cf">
                      {homePlayers?.first[10]?.number}
                    </span>
                  </div>
                  <div className="away">
                    <span className="btn gk">
                      {homePlayers?.second[0]?.number}
                    </span>
                    <span className="btn lb">
                      {homePlayers?.second[1]?.number}
                    </span>
                    <span className="btn cb1">
                      {homePlayers?.second[2]?.number}
                    </span>
                    <span className="btn cb2">
                      {homePlayers?.second[3]?.number}
                    </span>
                    <span className="btn rb">
                      {homePlayers?.second[4]?.number}
                    </span>
                    <span className="btn lm">
                      {homePlayers?.second[5]?.number}
                    </span>
                    <span className="btn cm">
                      {homePlayers?.second[6]?.number}
                    </span>
                    <span className="btn rm">
                      {homePlayers?.second[7]?.number}
                    </span>
                    <span className="btn lf">
                      {homePlayers?.second[8]?.number}
                    </span>
                    <span className="btn rf">
                      {homePlayers?.second[9]?.number}
                    </span>
                    <span className="btn cf">
                      {homePlayers?.second[10]?.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="mb-1">
                <i className="mdi mdi-shoe-print mdi-18px mr-2" />
                Events
              </h6>
              <div className="events mt-2 px-2 pt-2">
                <div className="row mb-3">
                  <div className="col-8">
                    <p className="mb-1">Goal</p>
                    <Chip label="Header" clickable />
                    <Chip label="Inside Box" clickable />
                    <Chip label="Outside Box" clickable />
                  </div>
                  <div className="col-4">
                    <p className="mb-1">Duel</p>
                    <Chip label="Aerial" clickable />
                    <Chip label="Ground" clickable />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="mb-1">Pass</p>
                    <Chip label="Long" clickable />
                    <Chip label="Short" clickable />
                    <Chip label="Linebreak" clickable />
                  </div>
                  <div className="col-6">
                    <p className="mb-1">Shot</p>
                    <Chip label="Long-range" clickable />
                    <Chip label="Short-range" clickable />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-5">
                    <p className="mb-1">Dribble</p>
                    <Chip label="Nutmeg" clickable />
                    <Chip label="Skill move" clickable />
                  </div>
                  <div className="col-7">
                    <p className="mb-1">Saves</p>
                    <Chip label="Inside box" clickable />
                    <Chip label="Outside box" clickable />
                    <Chip label="1 vs 1" clickable />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">
                    <p className="mb-1">Cards</p>
                    <Chip label="Dessent" clickable />
                    <Chip label="Foul" clickable />
                  </div>
                  <div className="col-8">
                    <p className="mb-1">Ball Progression</p>
                    <Chip label="Own Half" clickable />
                    <Chip label="Opponent Half" clickable />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <p className="mb-1">Clearance</p>
                    <Chip label="Goal line" clickable />
                    <Chip label="Under Pressure" clickable />
                   
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <p className="mb-1">Others</p>
                    <Chip label="Assist" clickable />
                    <Chip label="Penalty" clickable />
                    <Chip label="Freekick" clickable />
                    <Chip label="Tackle" clickable />
                    <Chip label="Block" clickable />
                    <Chip label="Cross" clickable />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h6>
                <i className="mdi mdi-timeline-outline mdi-18px mr-2" />
                Timeline
              </h6>
              <div className="timeline mt-2">
                <Divider horizontal className="px-3">
                  <i className="mdi mdi-timer-outline mr-2" />
                  <small>KICKOFF</small>
                </Divider>
              </div>
            </div>
          </div>

          <div className="col-lg-3 text-right">
            <h6>
              <i className="mdi mdi-strategy mr-2" />
              Line up for {location?.state?.away_team}
            </h6>
            <p className="mb-1 mt-3 text-muted">Starting line-up</p>
            <ul>
              {homePlayers.first.slice(0, 10).map((player) => (
                <li className="players">
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