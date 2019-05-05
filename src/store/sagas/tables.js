import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as TablesActions } from '../ducks/tables';

export function* getAllTablesRequest() {
  try {
    const response = yield call(api.get, '/contatos');

    if (response !== null && response.status === 200) {
      yield put(TablesActions.getAllTablesSuccess(response.data));
    } else {
      yield put(TablesActions.getAllTablesError('Não foi possível buscar as mesas disponíveis'));
    }
  } catch (error) {
    yield put(TablesActions.getAllTablesError('Não foi possível buscar as mesas disponíveis'));
  }
}

export function* selectTableRequest() {
  try {
    const response = yield call(api.get, '/contatos/perfil');

    if (response !== null && response.status === 200) {
      yield put(TablesActions.selectTableSuccess(response.data));
    } else {
      yield put(TablesActions.selectTableError('Não foi possível selecionar a mesa'));
    }
  } catch (error) {
    yield put(TablesActions.selectTableError('Não foi possível selecionar a mesa'));
  }
}
