import React from 'react'
import "../../styles/card.scss"

export default function Card() {
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-title">English Premier League</p>
          <div>
            <p className="club-name">Chelsea FC</p>
            <p className="card-subtitle mb-2 text-muted">Home</p>
          </div>

          <div>
            <p className="club-name">Liverpool FC</p>
            <p className="card-subtitle mb-2 text-muted">Away</p>
          </div>

          <hr />

          <div>
            <p className="time"> 14:00</p>
            <p className="card-subtitle mb-2 text-muted">Time</p>
          </div>

          <div>
            <p className="stadium"> Stamford Bridge</p>
            <p className="card-subtitle mb-2 text-muted">Stadium</p>
          </div>
        </div>
      </div>
    );
}
