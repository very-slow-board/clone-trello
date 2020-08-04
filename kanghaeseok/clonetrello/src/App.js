import React from "react";
import { HashRouter, Route } from "react-router-dom";
import BoardList from "./Routes/BoardList";
import BoardDetail from "./Routes/BoardDetail";
import Header from "./Components/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={BoardList} />
      <Route path="/:id" exact={true} component={BoardDetail} />
    </HashRouter>
  );
}

export default App;
