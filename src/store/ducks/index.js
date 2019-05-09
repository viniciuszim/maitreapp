import { combineReducers } from 'redux';

import sidebar from './sidebar';
import tables from './tables';

export default combineReducers({
  sidebar,
  tables,
});
