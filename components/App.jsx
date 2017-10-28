import React from 'react';
import { connect } from 'react-redux';

import MovieTable from './MovieTable';
import PaginationSelector from './PaginationSelector';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <MovieTable/>
        <PaginationSelector/>
      </div>
    );
  }
}
