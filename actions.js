import * as actionTypes from './actionTypes';
import queryString from 'query-string';
import dotenv from 'dotenv';

dotenv.config();
const authToken = process.env.API_TOKEN
const BASE_PARAMS = { authToken };

const ALL_MOVIES_URL = 'localhost:7000/api/1/FEE/AllMovies';
const MOVIES_BY_RANK_URL = 'localhost:7000/api/1/FEE/MoviesByRank';
const MOVIE_DETAILS_URL = 'localhost:7000/api/1/FEE/MovieDetails';

const _movieDetailsWithIds = (ids) => {
  const movieIdsString = ids.reduce((string, id) => string.concat(`&movieIds=${id}`), '');

  return `${MOVIE_DETAILS_URL}?authToken=${authToken}${movieIdsString}`;
};

export const initialize = () => {
  return (dispatch) => {
    dispatch(fetchMovies());
  };
};

export const updateMovies = (startRankIndex, numMovies) => {
  return (dispatch) => {
    dispatch(fetchMovies(startRankIndex, numMovies))
  }
}

const requestMovies = () => {
  return {
    type: actionTypes.REQUEST_MOVIES,
    payload: {
      isFetching: true
    }
  };
};

const receiveMovies = (movies) => {
  return {
    type: actionTypes.RECEIVE_MOVIES,
    payload: {
      isFetching: false,
      movies
    }
  };
};

const fetchMovies = (startRankIndex = 1, numMovies = 10) => {
  return (dispatch) => {
    dispatch(requestMovies());

    const params = Object.assign(BASE_PARAMS, { startRankIndex, numMovies });
    var url = `${MOVIES_BY_RANK_URL}?${queryString.stringify(params)}`;

    return fetch(url).then((simpleResponse) => {
      return simpleResponse.json();
    }).then((simpleMovies) => {
      const ids = simpleMovies.map((movie) => movie.Id);
      var url = _movieDetailsWithIds(ids);

      return fetch(url).then((detailResponse) => {
        return detailResponse.json();
      }).then((movies) => {
        dispatch(receiveMovies(movies));
      });
    });
  }
};

export const pageForwards = () => {
  return (dispatch, getState) => {
    var { startRankIndex, numMovies } = getState();
    var startRankIndex = startRankIndex + numMovies;
    dispatch({
      type: actionTypes.CHANGE_PAGE,
      payload: startRankIndex
    });
  }
};

export const pageBackwards = () => {
  return (dispatch, getState) => {
    var { startRankIndex, numMovies } = getState();
    var startRankIndex = startRankIndex - numMovies;
    dispatch({
      type: actionTypes.CHANGE_PAGE,
      payload: startRankIndex
    });
  };
};
