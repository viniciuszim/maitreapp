import { all, takeLatest } from 'redux-saga/effects';

import { Types as MenuTypes } from '../ducks/menu';
import { getMenuRequest } from './menu';

import { Types as ProductsTypes } from '../ducks/products';
import { getProductsRequest } from './products';

import { Types as SidebarTypes } from '../ducks/sidebar';
import { getSidebarRequest } from './sidebar';

import { Types as TablesTypes } from '../ducks/tables';
import { getAllTablesRequest, selectTableRequest } from './tables';

export default function* rootSaga() {
  yield all([
    takeLatest(MenuTypes.GET_MENU_REQUEST, getMenuRequest),

    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProductsRequest),

    takeLatest(SidebarTypes.GET_SIDEBAR_REQUEST, getSidebarRequest),

    takeLatest(TablesTypes.GET_ALL_TABLES_REQUEST, getAllTablesRequest),
    takeLatest(TablesTypes.SELECT_TABLE_REQUEST, selectTableRequest),
  ]);
}
