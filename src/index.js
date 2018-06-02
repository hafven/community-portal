import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import Loadable from "react-loadable";

import "./global-styles";
import Loading from "./components/Loading";
import auth from "./lib/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const LoadableLogin = Loadable({
  loader: () => import("./containers/Login"),
  loading: Loading
});

const LoadablePortal = Loadable({
  loader: () => import("./containers/Portal"),
  loading: Loading
});

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoadableLogin} />
      <PrivateRoute path="/" component={LoadablePortal} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
