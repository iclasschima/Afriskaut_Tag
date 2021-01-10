import React from "react";
import Chip from "@material-ui/core/Chip";

export default function Events({ addAction }) {
  return (
    <div className="row mb-3">
      <div className="pl-4">
        <p className="mb-1">Goal</p>
        <Chip label="Header" clickable />
        <Chip label="Inside Box" clickable />
        <Chip label="Outside Box" clickable />
      </div>

      <div className="pl-3">
        <p className="mb-1">Pass</p>

        <Chip
          label="Long"
          clickable
          onClick={() => {
            addAction({
              event: "pass",
              type: "long",
            });
          }}
        />
        <Chip
          label="Short"
          clickable
          onClick={() => {
            addAction({
              event: "pass",
              type: "short",
            });
          }}
        />
        <Chip
          label="Linebreak"
          clickable
          onClick={() => {
            addAction({
              event: "pass",
              type: "line-break",
            });
          }}
        />
      </div>
      <div className="pl-3">
        <p className="mb-1">Save</p>
        <Chip
          label="Inside box"
          clickable
          onClick={() => {
            addAction({
              event: "save",
              type: "inside box",
            });
          }}
        />
        <Chip
          label="Outside box"
          clickable
          onClick={() => {
            addAction({
              event: "save",
              type: "outside box",
            });
          }}
        />
        <Chip
          label="1 vs 1"
          clickable
          onClick={() => {
            addAction({
              event: "save",
              type: "1 vs 1",
            });
          }}
        />
      </div>
      <div className="pl-4">
        <p className="mb-1">Shot</p>
        <Chip
          label="Long-range"
          clickable
          onClick={() => {
            addAction({
              event: "shot",
              type: "long range",
            });
          }}
        />
        <Chip
          label="Short-range"
          clickable
          onClick={() => {
            addAction({
              event: "pass",
              type: "short range",
            });
          }}
        />
      </div>

      <div className="pl-4">
        <p className="mb-1">Duel</p>
        <Chip
          label="Aerial"
          clickable
          onClick={() => {
            addAction({
              event: "duel",
              type: "aerial",
            });
          }}
        />
        <Chip
          label="Ground"
          clickable
          onClick={() => {
            addAction({
              event: "duek",
              type: "ground",
            });
          }}
        />
      </div>
      <div className="pl-4">
        <p className="mb-1">Dribble</p>
        <Chip
          label="Nutmeg"
          clickable
          onClick={() => {
            addAction({
              event: "dribble",
              type: "nutmeg",
            });
          }}
        />
        <Chip
          label="Skill move"
          clickable
          onClick={() => {
            addAction({
              event: "dribble",
              type: "skill move",
            });
          }}
        />
      </div>
      <div className="pl-4">
        <p className="mb-1">Cards</p>
        <Chip
          label="Dessent"
          clickable
          onClick={() => {
            addAction({
              event: "card",
              type: "dessent",
            });
          }}
        />
        <Chip
          label="Foul"
          clickable
          onClick={() => {
            addAction({
              event: "card",
              type: "foul",
            });
          }}
        />
      </div>

      <div className="pl-4">
        <p className="mb-1">Ball Progression</p>
        <Chip label="Own Half" clickable />
        <Chip label="Opponent Half" clickable />
      </div>

      <div className="pl-4">
        <p className="mb-1">Clearance</p>
        <Chip label="Goal line" clickable />
        <Chip label="Under Pressure" clickable />
      </div>

      <div className="pl-3">
        <p className="mb-1">Others</p>
        <Chip label="Assist" clickable />
        <Chip label="Penalty" clickable />
        <Chip label="Freekick" clickable />
        <Chip label="Tackle" clickable />
        <Chip label="Block" clickable />
        <Chip label="Cross" clickable />
      </div>
    </div>
  );
}
