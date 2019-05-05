import { all, takeLatest } from 'redux-saga/effects';

import { Types as TablesTypes } from '../ducks/tables';
import { getAllTablesRequest, selectTableRequest } from './tables';

export default function* rootSaga() {
  yield all([
    takeLatest(TablesTypes.GET_ALL_TABLES_REQUEST, getAllTablesRequest),
    takeLatest(TablesTypes.SELECT_TABLE_REQUEST, selectTableRequest),
  ]);
}
