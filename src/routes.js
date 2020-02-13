import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./screens/index";
import Company from "./screens/company";
import Cadastro from "./screens/cadastro";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/company/:id" component={Company} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
