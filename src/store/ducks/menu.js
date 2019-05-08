export const Types = {
  GET_MENU_REQUEST: 'itemsMenu/GET_MENU_REQUEST',
  GET_MENU_SUCCESS: 'itemsMenu/GET_MENU_SUCCESS',
  GET_MENU_FAILURE: 'itemsMenu/GET_MENU_FAILURE',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function itemsMenu(state = initialState, action) {
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
  getMenuRequest: () => ({
    type: Types.GET_MENU_REQUEST,
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
