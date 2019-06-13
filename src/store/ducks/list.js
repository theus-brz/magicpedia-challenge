export const Types = {
  GET_REQUEST: 'lists/GET_REQUEST',
  GET_SUCCESS: 'lists/GET_SUCCESS',
  GET_FAILURE: 'lists/GET_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function lists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getListRequest: () => ({ type: Types.GET_REQUEST }),

  getListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),

  getListFailure: () => ({ type: Types.GET_FAILURE }),
};
