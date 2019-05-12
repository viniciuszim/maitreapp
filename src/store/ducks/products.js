export const Types = {
  GET_PRODUCTS_REQUEST: 'products/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'products/GET_PRODUCTS_FAILURE',
  SELECT_PRODUCTS_REQUEST: 'products/SELECT_PRODUCTS_REQUEST',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
  productSelected: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        productSelected: null,
      };
    case Types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: [...action.payload.products],
        loading: false,
        error: '',
      };
    case Types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case Types.SELECT_PRODUCTS_REQUEST:
      return {
        ...state,
        productSelected: action.payload.productSelected,
      };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: (idSidebar, idMenu) => ({
    type: Types.GET_PRODUCTS_REQUEST,
    payload: {
      idSidebar,
      idMenu,
    },
  }),

  getProductsSuccess: data => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: {
      products: data,
    },
  }),

  getProductsError: message => ({
    type: Types.GET_PRODUCTS_FAILURE,
    payload: {
      message,
    },
  }),

  selectProductRequest: productSelected => ({
    type: Types.SELECT_PRODUCTS_REQUEST,
    payload: {
      productSelected,
    },
  }),
};
