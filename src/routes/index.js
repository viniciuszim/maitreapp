import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Menu from '../pages/menu';
import Settings from '../pages/settings';
import Welcome from '../pages/welcome';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/configuracoes" component={Settings} />
    <Route path="/menu/:idMenu/cardapio" component={Menu} />
  </Switch>
);

export default Routes;
