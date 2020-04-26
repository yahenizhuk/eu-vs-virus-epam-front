import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { HomeContainer } from "./containers/home-container/home-container";
import {ImmunitiesContainer} from "./containers/immunities-container/immunities-container";
import {ImmunityDetailsContainer} from "./containers/immunity-details-container";

export function AppRouter(){
  return (
    <Router>
      <Switch>
        <Route path="/immunities-details/:type" exact>
          <ImmunityDetailsContainer />
        </Route>
        <Route path="/immunities" exact>
          <ImmunitiesContainer />
        </Route>
        <Route path="/" exact>
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  )
}
