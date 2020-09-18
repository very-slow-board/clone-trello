import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "../Components/Header";
import Detail from "../Routes/Detail";
import List from "../Routes/List";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/boards" exact component={List} />
        <Route path="/boards/:id" exact component={Detail} />
        <Redirect from="*" to="/boards" />
      </Switch>
    </>
  </Router>
);
