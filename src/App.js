import React from "react";
import Loadable from "react-loadable";
import Loader from "./helpers/Loader";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Global/Header";

const ProtectedRoute = ({ children, ...rest }) => {
  const {isLoggedIn} = useSelector((state) => state.auth);

  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ to: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

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
        <Route exact path={["/", "/login"]}>
          <Login />
        </Route>
        <ProtectedRoute path="/">
          <SecuredRoutes />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default withRouter(App);
