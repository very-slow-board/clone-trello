import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageHome from "pages/PageHome";
import PageBoardList from "pages/boards/list/PageBoardList";
import GlobalStyles from "styles/GlobalStyles";

const App = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PageHome} />
        <Route path="/boards/list" exact component={PageBoardList} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
