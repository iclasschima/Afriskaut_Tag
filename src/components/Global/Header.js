import React from 'react'
import { useLocation } from "react-router-dom";
import "../../styles/header.scss"

export default function Header() {


  const location = useLocation()

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
                  className={`nav-item nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                >
                  <span>Home</span>
                </a>
                <a
                  className={`nav-item nav-link ${
                    location.pathname === "/teams" ? "active" : ""
                  }`}
                  href="/"
                >
                  <span>Teams</span>
                </a>
                <a
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
