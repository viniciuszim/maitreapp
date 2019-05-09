import { combineReducers } from 'redux';

import menu from './menu';
import sidebar from './sidebar';
import tables from './tables';

export default combineReducers({
  menu,
  sidebar,
  tables,
});
