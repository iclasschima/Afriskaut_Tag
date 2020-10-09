import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../../styles/starting-line-up.scss";
import players from "../../helpers/players";
import { Checkbox } from "@material-ui/core";

export default function StartingLineUp() {
  const location = useLocation();
  const history = useHistory();
  const [homePlayers, setHomePlayers] = useState({ first: [], second: [] });

  useEffect(() => {
    setHomePlayers({
      first: [
        ...players
          .sort((a, b) => a.number - b.number)
          .slice(0, players.length / 2),
      ],
      second: [
        ...players
          .sort((a, b) => a.number - b.number)
          .slice(players.length / 2, players.length),
      ],
    });
  }, []);

  return (
    <div className="starting-line-up container-fluid pt-3">
      <div className="row">
        <div className="col-lg-6">
          <p>Select Team lineup for {location?.state.home_team}</p>
          <div className="players-list">
            <div className="row pl-0 pr-lg-5">
              <div className="col-lg-6">
                <ul>
                  {homePlayers?.first.map((player) => (
                    <li>
                      <Checkbox color="primary" />
                      <i className="text-muted">{player.number}.</i>

                      {player.name}
                      <small>{player.position}</small>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {homePlayers?.second.map((player) => (
                    <li>
                      <Checkbox color="primary" fontSize="small" />
                      <i className="text-muted">{player.number}.</i>

                      {player.name}
                      <small>{player.position}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <p>Select Team lineup for {location?.state.away_team}</p>
          <div className="players-list">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {homePlayers?.first.map((player) => (
                    <li>
                      <Checkbox color="primary" />
                      <i className="text-muted">{player.number}.</i>

                      {player.name}
                      <small>{player.position}</small>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {homePlayers?.second.map((player) => (
                    <li>
                      <Checkbox color="primary" fontSize="small" />
                      <i className="text-muted">{player.number}.</i>

                      {player.name}
                      <small>{player.position}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end mt-3">
        <div className="col-lg-2">
          <button
            className="btn primary-btn btn-sm"
            onClick={() => {
              history.push({
                pathname: "/match/start-match/1R1dad21n-ak22-jHYE21iD",
                state: {...location.state}
              });
            }}
          >
            Proceed <i className="mdi mdi-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
