export const Types = {
  GET_MENU_REQUEST: 'menu/GET_MENU_REQUEST',
  GET_MENU_SUCCESS: 'menu/GET_MENU_SUCCESS',
  GET_MENU_FAILURE: 'menu/GET_MENU_FAILURE',
  SELECT_MENU_REQUEST: 'menu/SELECT_MENU_REQUEST',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
  menuSelected: null,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case Types.GET_MENU_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        menuSelected: null,
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
    case Types.SELECT_MENU_REQUEST:
      return {
        ...state,
        menuSelected: action.payload.menuSelected,
      };
    default:
      return state;
  }
}

export const Creators = {
  getMenuRequest: (idSidebar, idMenu) => ({
    type: Types.GET_MENU_REQUEST,
    payload: {
      idSidebar,
      idMenu,
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

  selectMenuRequest: menuSelected => ({
    type: Types.SELECT_MENU_REQUEST,
    payload: {
      menuSelected,
    },
  }),
};
