import React from "react";
// import Card from "./Card";
import { Helmet } from "react-helmet"
import "../../styles/matches.scss";
import moment from "moment";
// import { BiFootball } from "react-icons/bi";
// import matches from "../../helpers/matches"

export default function Home() {

  return (
    <div className="container-fluid home">
      <Helmet>
        <title>Afriskaut - Dashboard</title>
      </Helmet>
      <div className="row">
        <div className="col-12">
          <p className="header">
            {moment().format("MMMM D, YYYY")}.
          </p>
        </div>
      </div>
    
    </div>
  );
}
