import React from "react";
import Loadable from "react-loadable";
import Loader from "./helpers/Loader";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Global/Footer";
import "./styles/container.scss";

const Home = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: Loader,
  delay: 100,
});

const Matches = Loadable({
  loader: () => import("./components/Matches/Matches"),
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
  delay: 100,
});

const Competitions = Loadable({
  loader: () => import("./components/Competitions/Competitions"),
  loading: Loader,
  delay: 100,
});

const AddCompetitions = Loadable({
  loader: () => import("./components/Competitions/Add"),
  loading: Loader,
  delay: 100,
});

const AddMatch = Loadable({
  loader: () => import("./components/Matches/Add"),
  loading: Loader,
  delay: 100,
});

const Lineup = Loadable({
  loader: () => import("./components/Matches/StartingLineUp"),
  loading: Loader,
  delay: 100,
});


const StartMatch = Loadable({
  loader: () => import("./components/Matches/StartMatch"),
  loading: Loader,
  delay: 100,
});

export default function SecuredRoutes() {
  return (
    <div className="main-container container-fluid">
      <div className="row">
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/create-team" exact component={CreateTeam} />
        <Route path="/matches" exact component={Matches} />
        <Route path="/add-players" exact component={AddPlayers} />
        <Route path="/competitions" exact component={Competitions} />
        <Route path="/add-competition" exact component={AddCompetitions} />
        <Route path="/add-match" exact component={AddMatch} />
        <Route path="/match/lineup/:id" exact component={Lineup} />
         <Route path="/match/start-match/:id" exact component={StartMatch} />
      </Switch>

      <Footer />
    </div>
  );
}
