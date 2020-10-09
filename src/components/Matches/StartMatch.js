import React, {useEffect, useState} from 'react'
import "../../styles/start-match.scss";
import { useLocation } from "react-router-dom"
import players from "../../helpers/players";
import Timer from "react-compound-timer"

export default function StartMatch() {
    const location = useLocation()
  const [homePlayers, setHomePlayers] = useState({ first: [], second: [] });
  
  const [timer, setTimer] = useState(0)

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
      <div className="container-fluid start-match">
        <div className="row">
          <div className="col-12 row">
            <div className="col-lg-6">
              <p>
                <i className="mdi mdi-strategy mr-2" />
                Line up for {location?.state?.home_team}
              </p>
              <div>
                <small>Starting line-up</small> <br />
                {homePlayers.first.slice(0, 10).map((player) => (
                  <small className="mr-2 players">
                    {player.number}. {player.name},{" "}
                  </small>
                ))}
              </div>
              <div className="mt-3">
                <small>Substitutions</small> <br />
                {homePlayers.second.slice(0, 5).map((player) => (
                  <small className="mr-2 players">
                    {player.number}. {player.name},{" "}
                  </small>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                <i className="mdi mdi-strategy mr-2" />
                Line up for {location?.state?.away_team}
              </p>
              <div>
                <small>Starting line-up</small> <br />
                {homePlayers.first.slice(0, 10).map((player) => (
                  <small className="mr-2 players">
                    {player.number}. {player.name},{" "}
                  </small>
                ))}
              </div>
              <div className="mt-3">
                <small>Substitutions</small> <br />
                {homePlayers.second.slice(5, 10).map((player) => (
                  <small className="mr-2 players">
                    {player.number}. {player.name},{" "}
                  </small>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 row">
            <div className="col-lg-7">
              <Timer
                formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
                initialTime={0}
                startImmediately={false}
                checkpoints={[
                  {
                    time: 100 * 60,
                    callback: (time) => console.log(time),
                  },
                ]}
              >
                {({ start, resume, pause, stop, reset, getTime }) => (
                  <React.Fragment>
                    <p>
                      <i className="mdi mdi-timer-outline mr-2" />
                      <Timer.Minutes /> {": "}
                      <Timer.Seconds />
                    </p>

                    <div>
                      <button className="btn btn-sm border" onClick={start}>
                      
                        <i className="mdi mdi-play mr-2" />
                      </button>
                      <button onClick={pause}>pause</button>
                      <button onClick={resume}>Resume</button>
                      <button
                        onClick={() => {
                          setTimer(getTime().toFixed());
                          stop();
                        }}
                      >
                        Stop
                      </button>
                      <button onClick={reset}>Reset</button>
                    </div>
                  </React.Fragment>
                )}
              </Timer>

              <div className="col-12 row">
                <div className="col-lg-6">
                  <div className="board"></div>
                </div>
                <div className="col-lg-6">
                  <div className="board"></div>
                </div>
              </div>
              <div className="col-12 mt-3 row">
                <p>
                  <i className="mdi mdi-shoe-print mdi-18px mr-2" />
                  Events
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <p>Timeline</p>
              <div className="timeline"></div>
            </div>
          </div>
        </div>
      </div>
    );
}
