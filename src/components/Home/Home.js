import React from 'react'
import Card from "./Card"
import "../../styles/home.scss"

export default function Home() {
    return (
      <div className="container-fluid home">
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
