import { all, takeLatest } from 'redux-saga/effects';

import { Types as MenyTypes } from '../ducks/menu';
import { getMenuRequest } from './menu';

import { Types as TablesTypes } from '../ducks/tables';
import { getAllTablesRequest, selectTableRequest } from './tables';

export default function* rootSaga() {
  yield all([
    takeLatest(MenyTypes.GET_MENU_REQUEST, getMenuRequest),

    takeLatest(TablesTypes.GET_ALL_TABLES_REQUEST, getAllTablesRequest),
    takeLatest(TablesTypes.SELECT_TABLE_REQUEST, selectTableRequest),
  ]);
}
