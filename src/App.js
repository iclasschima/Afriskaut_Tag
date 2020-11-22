import React from "react";
import Loadable from "react-loadable";
import Loader from "./helpers/Loader";
import { withRouter } from "react-router";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Global/Header";

const SecuredRoutes = Loadable({
  loader: () => import("./SecuredRoutes"),
  loading: Loader,
  delay: 100,
});

const Login = Loadable({
  loader: () => import("./components/Auth/Login"),
  loading: Loader,
  delay: 100,
});

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={SecuredRoutes} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
}

export default withRouter(App);
