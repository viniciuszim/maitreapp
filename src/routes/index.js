import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Welcome from '../pages/welcome';
import Settings from '../pages/settings';
import Menu from '../pages/menu';
import Products from '../pages/products';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/sidebar/:idSidebar/menu" component={Menu} />
    <Route exact path="/sidebar/:idSidebar/menu/:idMenu/products" component={Products} />
  </Switch>
);

export default Routes;
