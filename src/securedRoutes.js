import React from 'react'
import Loadable from "react-loadable";
import Loader from "./helpers/Loader";
import { Switch, Route } from "react-router-dom";
import { BiFootball } from "react-icons/bi"

import Footer from "./components/Global/Footer"
import "./styles/container.scss"


const Home = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: Loader,
  delay: 100,
});


export default function securedRoutes() {
    return (
      <div className="main-container container-fluid">
        <div className="row">
          <nav aria-label="breadcrumb" className="col-7">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">
                <a href="/">Home</a>
              </li>
              {/* <li class="breadcrumb-item">
                <a href="/">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data
              </li> */}
            </ol>
          </nav>
          <div className="ml-auto pr-2">
            <button className="btn btn-sm form-control primary-btn small-btn">
              {" "}
              <BiFootball /> Add New Match
            </button>
          </div>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
      </div>
    );
}
