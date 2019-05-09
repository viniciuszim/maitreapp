import { all, takeLatest } from 'redux-saga/effects';

import { Types as SidebarTypes } from '../ducks/sidebar';
import { getSidebarRequest } from './sidebar';

import { Types as TablesTypes } from '../ducks/tables';
import { getAllTablesRequest, selectTableRequest } from './tables';

export default function* rootSaga() {
  yield all([
    takeLatest(SidebarTypes.GET_SIDEBAR_REQUEST, getSidebarRequest),

    takeLatest(TablesTypes.GET_ALL_TABLES_REQUEST, getAllTablesRequest),
    takeLatest(TablesTypes.SELECT_TABLE_REQUEST, selectTableRequest),
  ]);
}
