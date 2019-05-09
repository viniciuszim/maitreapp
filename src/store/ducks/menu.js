export const Types = {
  GET_MENU_REQUEST: 'menu/GET_MENU_REQUEST',
  GET_MENU_SUCCESS: 'menu/GET_MENU_SUCCESS',
  GET_MENU_FAILURE: 'menu/GET_MENU_FAILURE',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case Types.GET_MENU_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.GET_MENU_SUCCESS:
      return {
        ...state,
        data: [...action.payload.menu],
        loading: false,
        error: '',
      };
    case Types.GET_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  getMenuRequest: idSidebar => ({
    type: Types.GET_MENU_REQUEST,
    payload: {
      idSidebar,
    },
  }),

  getMenuSuccess: data => ({
    type: Types.GET_MENU_SUCCESS,
    payload: {
      menu: data,
    },
  }),

  getMenuError: message => ({
    type: Types.GET_MENU_FAILURE,
    payload: {
      message,
    },
  }),
};
