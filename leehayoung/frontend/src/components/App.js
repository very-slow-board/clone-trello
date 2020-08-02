import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BoardListPage, BoardPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={BoardListPage} />
        <Route exact path="/board/:id" component={BoardPage} />
      </Switch>
    </div>
  );
};

export default App;