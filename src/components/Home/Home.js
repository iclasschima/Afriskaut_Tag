import React from 'react'
import Card from "./Card"
import "../../styles/home.scss"
import { BiFootball } from "react-icons/bi";

export default function Home() {
    return (
      <div className="container-fluid home">
        <div className="row">
          <div className="col-12">
            <p className="header"> <BiFootball /> Upcoming Matches </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <Card />
          </div>
        </div>
      </div>
    );
}
