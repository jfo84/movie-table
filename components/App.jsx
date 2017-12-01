import React from 'react';

import MovieTable from './MovieTable';
import MoviePagination from './MoviePagination';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <MovieTable/>
        <MoviePagination/>
      </div>
    );
  }
}
