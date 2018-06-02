import { Redirect, Route, Switch } from "react-router";
import React from "react";
import Loadable from "react-loadable";

import BetaBar from "../components/BetaBar";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";

const LoadableDirectory = Loadable({
  loader: () => import("./Directory"),
  loading: Loading
});

class Portal extends React.Component {
  render() {
    return (
      <div>
        <BetaBar />
        <NavBar />
        <Switch>
          <Route path="/directory" component={LoadableDirectory} />
          <Redirect push to="/directory" />
        </Switch>
      </div>
    );
  }
}

export default Portal;
