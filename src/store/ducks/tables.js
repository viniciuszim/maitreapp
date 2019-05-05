export const Types = {
  GET_ALL_TABLES_REQUEST: 'tables/GET_ALL_TABLES_REQUEST',
  GET_ALL_TABLES_SUCCESS: 'tables/GET_ALL_TABLES_SUCCESS',
  GET_ALL_TABLES_FAILURE: 'tables/GET_ALL_TABLES_FAILURE',
  SELECT_TABLE_REQUEST: 'tables/SELECT_TABLE_REQUEST',
  SELECT_TABLE_SUCCESS: 'tables/SELECT_TABLE_SUCCESS',
  SELECT_TABLE_FAILURE: 'tables/SELECT_TABLE_FAILURE',
};

const initialState = {
  data: [],
  tableSelected: null,
  loading: false,
  error: null,
};

export default function tables(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ALL_TABLES_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.GET_ALL_TABLES_SUCCESS:
      return {
        data: [...action.payload.tables],
        loading: false,
        error: '',
      };
    case Types.GET_ALL_TABLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case Types.SELECT_TABLE_REQUEST:
      return {
        ...state,
        tableSelected: null,
        loading: true,
        error: '',
      };
    case Types.SELECT_TABLE_SUCCESS:
      return {
        ...state,
        tableSelected: action.payload.tableSelected,
        loading: false,
        error: '',
      };
    case Types.SELECT_TABLE_FAILURE:
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
  getAllTablesRequest: () => ({
    type: Types.GET_ALL_TABLES_REQUEST,
  }),
  getAllTablesSuccess: data => ({
    type: Types.GET_ALL_TABLES_SUCCESS,
    payload: {
      tables: data,
    },
  }),
  getAllTablesError: message => ({
    type: Types.GET_ALL_TABLES_FAILURE,
    payload: {
      message,
    },
  }),

  selectTableRequest: table => ({
    type: Types.SELECT_TABLE_REQUEST,
    payload: {
      table,
    },
  }),
  selectTableSuccess: tableSelected => ({
    type: Types.SELECT_TABLE_SUCCESS,
    payload: {
      tableSelected,
    },
  }),
  selectTableError: message => ({
    type: Types.SELECT_TABLE_FAILURE,
    payload: {
      message,
    },
  }),
};
