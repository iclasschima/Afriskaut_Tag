import React from "react";
import Loadable from "react-loadable";
import Loader from "./helpers/Loader"
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Global/Header"


const SecuredRoutes = Loadable({
  loader: () => import("./SecuredRoutes"),
  loading: Loader,
  delay: 100
})

const Login = Loadable({
  loader: () => import("./components/Auth/Login"),
  loading: Loader,
  delay: 100
})

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={SecuredRoutes} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
