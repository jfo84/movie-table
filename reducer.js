import * as actionTypes from './actionTypes';

const initialState = {
  startRankIndex: 1,
  numMovies: 10
}

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case(actionTypes.GET_MOVIES):
      return {
        ...state,
        ...payload
      };
    case(actionTypes.CHANGE_PAGE):
      return {
        ...state,
        ...payload
      };
    case(actionTypes.CHANGE_PAGINATION):
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}

export default reducer;
