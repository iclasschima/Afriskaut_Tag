import React from "react";
import Card from "./Card";
import PlayedCard from "./PlayedCard";
import "../../styles/matches.scss";
import matches from "../../helpers/matches";
import { useHistory } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

export default function Matches() {
  const history = useHistory();

  return (
    <div className="container-fluid matches">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-between my-2">
          <p className="header">
            <i className="mdi mdi-soccer mr-1"></i> Upcoming Matches
          </p>

          <button
            className="btn primary-btn ml-auto"
            onClick={() => history.push("/add-match")}
          >
            <i className="mdi mdi-plus mr-2" /> Add Match
          </button>
        </div>
      </div>
      <div className="row">
        {matches.slice(1, 5).map((match) => (
          <div className="col-3">
            <Card data={match} />
          </div>
        ))}
      </div>
      <div className="row justify-content-end">
        <a href="/matches" className="view-more">
          view more <GrFormNextLink />
        </a>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <p className="header">
            <i className="mdi mdi-soccer mr-1"></i> Most Recent Matches
          </p>
        </div>
      </div>
      <div className="row">
        {matches.slice(matches.length - 4, matches.length).map((match) => (
          <div className="col-3">
            <PlayedCard data={match} />
          </div>
        ))}
      </div>
      <div className="row justify-content-end">
        <a href="/matches" className="view-more">
          view more <GrFormNextLink />
        </a>
      </div>
    </div>
  );
}
