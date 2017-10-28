import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow
} from 'material-ui/Table';

export class MovieTable extends React.Component {
  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props;

    return(
      <Table fixedHeader={true} selectable={false}>
        <TableHeader>
          <div>Name</div>
          <div>Description</div>
          <div>Actors</div>
          <div>Director</div>
          <div>Genres</div>
          <div>Duration</div>
        </TableHeader>
        <TableBody displayRowCheckbox={false} selectable={false}>
          return movies.map((movie, index) => {
            <TableRow key={index} displayBorder={true}>
              const { Name, Descrption, Actors, Directors, Genres, Duration } = movie;
              <div>
                <div>this.Name</div>
                <div>this.Description</div>
                <div>this.Actors</div>
                <div>this.Director</div>
                <div>this.Genres</div>
                <div>this.Duration</div>
              </div>
            </TableRow>
          });
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startRankIndex: state.startRankIndex,
    numMovies: state.numMovies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (startRankIndex, numMovies) => dispatch(getMovies(startRankIndex, numMovies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
