import React from "react";
import { Route, Switch } from "react-router";
import App from "../App";
import Info from "./infoPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/:id" exact component={Info} />

      <Route />
    </Switch>
  );
};

export default Routes;
