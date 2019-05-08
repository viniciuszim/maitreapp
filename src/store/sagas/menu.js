import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MenuActions } from '../ducks/menu';

export function* getMenuRequest() {
  try {
    const response = yield call(api.get, '/menu');

    if (response !== null && response.status === 200) {
      yield put(MenuActions.getMenuSuccess(response.data));
    } else {
      yield put(MenuActions.getMenuError('Não foi possível buscar os menus disponíveis'));
    }
  } catch (error) {
    yield put(MenuActions.getMenuError('Não foi possível buscar os menus disponíveis'));
  }
}
