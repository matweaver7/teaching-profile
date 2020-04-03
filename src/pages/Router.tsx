import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ROUTE from "@enums/Routes";

//Pages
import Home from "./Home";
import NotFound from "./NotFound";

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTE.HOME} exact component={Home} />
      <Route path={ROUTE.NOT_FOUND} exact component={NotFound} />
      <Redirect to={ROUTE.NOT_FOUND} />
    </Switch>
  </BrowserRouter>
);

export default Router;