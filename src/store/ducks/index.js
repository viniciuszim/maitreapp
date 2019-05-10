import { combineReducers } from 'redux';

import menu from './menu';
import products from './products';
import sidebar from './sidebar';
import tables from './tables';

export default combineReducers({
  menu,
  products,
  sidebar,
  tables,
});
