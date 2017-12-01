import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { updateMovies, pageForwards, pageBackwards } from '../actions';
import { bindActionCreators } from 'redux';

export class MoviePagination extends React.Component {
  componentDidUpdate() {
    const { startRankIndex } = this.props;

    this.props.updateMovies(startRankIndex);
  }

  render() {
    const { startRankIndex } = this.props;
    const forwardDisabled = startRankIndex === 1;

    return(
      <div>
        <RaisedButton
          label={'<'}
          disabled={forwardDisabled}
          onTouchTap={() => this.props.pageBackwards()}/>
        <RaisedButton
          label={'>'}
          onTouchTap={() => this.props.pageForwards()}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startRankIndex: state.startRankIndex
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMovies,
    pageForwards,
    pageBackwards
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePagination);
