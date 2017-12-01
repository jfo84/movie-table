import React from 'react';
import { connect } from 'react-redux';
import { initialize } from '../actions';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn
} from 'material-ui/Table';

import MovieRow from './MovieRow';

export class MovieTable extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  headerColumnStyle() {
    return { textAlign: 'center' };
  }

  headerColumnGenerator(text, index) {
    return(
      <TableHeaderColumn key={index} style={this.headerColumnStyle()}>
        {text}
      </TableHeaderColumn>
    );
  }

  render() {
    const { movies, isFetching } = this.props;
    const headerNames = ['Name', 'Description', 'Actors', 'Director', 'Genres', 'Duration', 'Book it!'];

    return(
      <Table fixedHeader={true} selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            {headerNames.map((name, index) => {
              return this.headerColumnGenerator(name, index);
            })}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} selectable={false}>
          {isFetching ?
            <TableRow>
              <TableRowColumn>
                Loading...
              </TableRowColumn>
            </TableRow> :
            movies.map((movie, index) => {
              return <MovieRow movie={movie} key={index} index={index}/>;
            })}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialize: () => { dispatch(initialize()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
