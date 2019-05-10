import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* getProductsRequest(action) {
  try {
    const { idSidebar, idMenu } = action.payload;

    // TODO descomentar a url correta do servidor
    // response = yield call(api.get, `menu/${idSidebar}/cardapio/${idMenu}/nivel`);
    const response = yield call(api.get, '/produtos');

    if (response !== null && response.status === 200) {
      yield put(ProductsActions.getProductsSuccess(response.data));
    } else {
      yield put(ProductsActions.getProductsError('Não foi possível buscar os produtos'));
    }
  } catch (error) {
    yield put(ProductsActions.getProductsError('Não foi possível buscar os produtos'));
  }
}
