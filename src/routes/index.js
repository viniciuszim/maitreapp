import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Welcome from '../pages/welcome';
import Settings from '../pages/settings';
import Menu from '../pages/menu';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/settings" component={Settings} />
    <Route path="/sidebar/:idSidebar/menu" component={Menu} />
  </Switch>
);

export default Routes;
