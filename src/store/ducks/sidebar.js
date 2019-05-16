export const Types = {
  GET_SIDEBAR_REQUEST: 'sidebar/GET_SIDEBAR_REQUEST',
  GET_SIDEBAR_SUCCESS: 'sidebar/GET_SIDEBAR_SUCCESS',
  GET_SIDEBAR_FAILURE: 'sidebar/GET_SIDEBAR_FAILURE',
  SELECT_SIDEBAR_REQUEST: 'sidebar/SELECT_SIDEBAR_REQUEST',
  HANDLE_SIDEBAR_REQUEST: 'sidebar/HANDLE_SIDEBAR_REQUEST',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
  sidebarSelected: null,
  showSidebar: false,
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case Types.GET_SIDEBAR_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        sidebarSelected: null,
        showSidebar: !(window.innerWidth <= 575), // Screen XS
      };
    case Types.GET_SIDEBAR_SUCCESS:
      return {
        ...state,
        data: [...action.payload.menu],
        loading: false,
        error: '',
      };
    case Types.GET_SIDEBAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case Types.SELECT_SIDEBAR_REQUEST:
      return {
        ...state,
        sidebarSelected: action.payload.sidebarSelected,
      };
    case Types.HANDLE_SIDEBAR_REQUEST:
      return {
        ...state,
        showSidebar: action.payload.showSidebar,
      };
    default:
      return state;
  }
}

export const Creators = {
  getSidebarRequest: () => ({
    type: Types.GET_SIDEBAR_REQUEST,
  }),

  getSidebarSuccess: data => ({
    type: Types.GET_SIDEBAR_SUCCESS,
    payload: {
      menu: data,
    },
  }),

  getSidebarError: message => ({
    type: Types.GET_SIDEBAR_FAILURE,
    payload: {
      message,
    },
  }),

  selectSidebarRequest: sidebarSelected => ({
    type: Types.SELECT_SIDEBAR_REQUEST,
    payload: {
      sidebarSelected,
    },
  }),

  handleSidebarRequest: showSidebar => ({
    type: Types.HANDLE_SIDEBAR_REQUEST,
    payload: {
      showSidebar,
    },
  }),
};
