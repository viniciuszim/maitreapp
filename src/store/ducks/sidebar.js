export const Types = {
  GET_SIDEBAR_REQUEST: 'sidebar/GET_SIDEBAR_REQUEST',
  GET_SIDEBAR_SUCCESS: 'sidebar/GET_SIDEBAR_SUCCESS',
  GET_SIDEBAR_FAILURE: 'sidebar/GET_SIDEBAR_FAILURE',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case Types.GET_SIDEBAR_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
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
};
