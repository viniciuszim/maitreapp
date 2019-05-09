import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MenuActions } from '../ducks/menu';

export function* getMenuRequest(action) {
  try {
    // TODO descomentar a url correta do servidor
    // const { idSidebar } = action.payload;
    // const response = yield call(api.get, `/menu/${idSidebar}/cardapio`);
    const response = yield call(api.get, '/cardapio');

    if (response !== null && response.status === 200) {
      yield put(MenuActions.getMenuSuccess(response.data));
    } else {
      yield put(MenuActions.getMenubarError('Não foi possível buscar o cardápio'));
    }
  } catch (error) {
    yield put(MenuActions.getMenubarError('Não foi possível buscar o cardápio'));
  }
}
