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

export const getMovies = (startRankIndex = 1, numMovies = 10) => {
  const params = Object.assign(BASE_PARAMS, { startRankIndex, numMovies });
  var url = `${MOVIES_BY_RANK_URL}?${queryString.stringify(params)}`;

  const movies = fetch(url).then((response) => {
    const ids = response.json.map((movie) => movie.Id);
    var url = _movieDetailsWithIds(ids);

    return fetch(url).then(detailResponse => detailResponse.json)
  });

  return {
    type: actionTypes.GET_MOVIES,
    payload: {
      movies,
      startRankIndex,
      numMovies
    }
  };
};

export const changePage = (startRankIndex) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    payload: startRankIndex
  };
};

export const changePagination = (numMovies) => {
  return {
    type: actionTypes.CHANGE_PAGINATION,
    payload: numMovies
  };
};
