import * as actionTypes from './actionTypes';

const initialState = {
  isFetching: false,
  startRankIndex: 1,
  numMovies: 10,
  movies: []
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case(actionTypes.REQUEST_MOVIES):
      return {
        ...state,
        ...payload
      };
    case(actionTypes.RECEIVE_MOVIES):
      return {
        ...state,
        ...payload
      };
    case(actionTypes.CHANGE_PAGE):
      return {
        ...state,
        startRankIndex: payload
      };
    default:
      return state;
  }
}

export default reducer;
