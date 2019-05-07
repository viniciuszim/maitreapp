import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Settings from '../pages/settings';
import Welcome from '../pages/welcome';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/configuracoes" component={Settings} />
  </Switch>
);

export default Routes;
