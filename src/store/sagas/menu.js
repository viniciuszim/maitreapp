import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MenuActions } from '../ducks/menu';

export function* getMenuRequest(action) {
  try {
    let response = null;

    const { idSidebar, idMenu } = action.payload;

    // TODO descomentar a url correta do servidor
    if (typeof idMenu === 'undefined' || idMenu === null) {
      // response = yield call(api.get, `/menu/${idSidebar}/cardapio`);
      response = yield call(api.get, '/cardapio');
    } else {
      // response = yield call(api.get, `menu/${idSidebar}/cardapio/${idMenu}/nivel`);
      response = yield call(api.get, '/nivel');
    }

    if (response !== null && response.status === 200) {
      yield put(MenuActions.getMenuSuccess(response.data));
    } else {
      yield put(MenuActions.getMenuError('Não foi possível buscar o cardápio'));
    }
  } catch (error) {
    yield put(MenuActions.getMenuError('Não foi possível buscar o cardápio'));
  }
}
