import React from "react";
import PropTypes from "prop-types";

export default function Board({ players, addEvent }) {
  const positions = [
    "gk",
    "lb",
    "cb1",
    "cb2",
    "rb",
    "lm",
    "cm",
    "rm",
    "lf",
    "rf",
    "cf",
  ];

  return (
    <div>
      {players.map((player, index) => {
        return (
          <span
            key={index}
            className={`btn ${positions[index]}`}
            onClick={() => addEvent(player)}
          >
            {player?.number}
          </span>
        );
      })}
    </div>
  );
}

Board.propTypes = {
  players: PropTypes.array.isRequired,
  addEvent: PropTypes.func.isRequired,
};

// Board.defaultProps = {
//   players: {},
//   addEvent: () => {},
// };
