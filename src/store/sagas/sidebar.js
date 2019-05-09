import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as SidebarActions } from '../ducks/sidebar';

export function* getSidebarRequest() {
  try {
    const response = yield call(api.get, '/menu');

    if (response !== null && response.status === 200) {
      yield put(SidebarActions.getSidebarSuccess(response.data));
    } else {
      yield put(SidebarActions.getSidebarError('Não foi possível buscar os menus disponíveis'));
    }
  } catch (error) {
    yield put(SidebarActions.getSidebarError('Não foi possível buscar os menus disponíveis'));
  }
}
