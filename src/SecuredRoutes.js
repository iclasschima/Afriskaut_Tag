import React from "react";
import Loadable from "react-loadable";
import Loader from "./helpers/Loader";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { BiFootball, BiClipboard } from "react-icons/bi";

import Footer from "./components/Global/Footer";
import "./styles/container.scss";

const Home = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: Loader,
  delay: 100,
});

const Teams = Loadable({
  loader: () => import("./components/Teams/Teams"),
  loading: Loader,
  delay: 100,
});

const CreateTeam = Loadable({
  loader: () => import("./components/Teams/CreateTeam"),
  loading: Loader,
  delay: 100,
});

const AddPlayers = Loadable({
  loader: () => import("./components/Teams/AddPlayers"),
  loading: Loader,
  delay: 100
})

export default function SecuredRoutes() {
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
        <Button />
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/create-team" exact component={CreateTeam} />
        <Route path="/add-players" exact component={AddPlayers} />
      </Switch>
      <Footer />
    </div>
  );
}

const Button = () => {
  const location = useLocation();
  const history = useHistory()

  const handleClick = (e, path) => {
    e.preventDefault()
    history.push(`/${path}`)

  };
  return (
    <div className="ml-auto pr-2">
      <button className="btn btn-sm primary-btn small-btn">
        {location.pathname === "/" ? (
          <div onClick={(e) => handleClick(e, "create-match")}>
            <BiFootball /> Add New Match
          </div>
        ) : location.pathname === "/teams" ? (
          <div onClick={(e) => handleClick(e, "create-team")}>
            <BiClipboard />
            Add New Team
          </div>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};
