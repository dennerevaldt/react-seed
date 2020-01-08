import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '~/config/history';
import Main from '~/screens/Main';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route route="/" exact component={Main} />
      </Switch>
    </Router>
  );
}
