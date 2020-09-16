import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../../styles/header.scss";

export default function Header() {
  const history = useHistory();
  const location = useLocation();

  const handleClick = (e, page) => {
    e.preventDefault();
    history.push(`/${page}`);
  };

  return (
    <div className="container-fluid nav-container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Afriskaut
        </a>
        {location.pathname !== "/login" && (
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a
                onClick={(e) => handleClick(e, "")}
                className={`nav-item nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                href="/"
              >
                <span>Home</span>
              </a>

              <a
                onClick={(e) => handleClick(e, "matches")}
                className={`nav-item nav-link ${
                  location.pathname === "/matches" ? "active" : ""
                }`}
                href="/"
              >
                <span>Matches</span>
              </a>
              <a
                onClick={(e) => handleClick(e, "teams")}
                className={`nav-item nav-link ${
                  location.pathname === "/teams" ||
                  location.pathname === "/create-team" ||
                  location.pathname === "/add-players"
                    ? "active"
                    : ""
                }`}
                href="/"
              >
                <span>Teams</span>
              </a>
              <a
                onClick={(e) => handleClick(e, "leagues")}
                className={`nav-item nav-link ${
                  location.pathname === "/leagues" ? "active" : ""
                }`}
                href="/"
              >
                <span>Leagues</span>
              </a>
              <a
                onClick={(e) => handleClick(e, "players")}
                className={`nav-item nav-link ${
                  location.pathname === "/players" ? "active" : ""
                }`}
                href="/"
              >
                <span>Players</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
