import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mockup from "./mockup";

export default function InternalRouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mockup">
            <Mockup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
