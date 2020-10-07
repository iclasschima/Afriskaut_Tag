import React, {useEffect, useState} from 'react'
import "../../styles/start-match.scss";
import { useLocation } from "react-router-dom"
import players from "../../helpers/players";

export default function StartMatch() {
    const location = useLocation()
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
      <div className="container-fluid start-match">
        <div className="row">
          <div className="col-12">
            <div className="col-lg-6">
              <p>Line up for {location?.state?.home_team}</p>
              <div>
                <small>Starting line-up</small> <br />
                {homePlayers.first.slice(0, 10).map((player) => (
                  <small className="mr-2">
                    {player.number}. {player.name},{" "}
                  </small>
                ))}
              </div>
              <div className="mt-3">
                <small>Substitutions</small> <br />
                {homePlayers.first.slice(5, 10).map((player) => (
                  <small className="mr-2">
                    {player.number}. {player.name},{" "}
                  </small>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
