import { combineReducers } from 'redux';

import itemsMenu from './menu';
import tables from './tables';

export default combineReducers({
  itemsMenu,
  tables,
});
