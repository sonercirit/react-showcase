import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mockup from "./mockup";
import Main from "./Main";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Main />
    </Route>
    <Route path="/mockup">
      <Mockup />
    </Route>
    <Route>
      <Main notFound />
    </Route>
  </Switch>
);

export default function InternalRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes />
    </Router>
  );
}
