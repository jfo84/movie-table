import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const MovieRow = ({ movie, index }) => {
  const { Name, Description, Actors, Director, Genres, Duration } = movie;
  const joinedActors = Actors.join(', ');
  const joinedGenres = Genres.join(', ');
  const directorStyle = { textAlign: 'center' };
  const durationStyle = { textAlign: 'center' };
  const linkStyle = { textDecoration: 'none', textAlign: 'center', display: 'block' };
  const fandangoLink = `https://www.fandango.com/search?q=${Name}&mode=general`;

  return(
    <TableRow key={index} displayBorder={true}>
      <TableRowColumn>
        {Name}
      </TableRowColumn>
      <TableRowColumn>
        {Description}
      </TableRowColumn>
      <TableRowColumn>
        {joinedActors}
      </TableRowColumn>
      <TableRowColumn style={directorStyle}>
        {Director}
      </TableRowColumn>
      <TableRowColumn>
        {joinedGenres}
      </TableRowColumn>
      <TableRowColumn style={durationStyle}>
        {Duration}
      </TableRowColumn>
      <TableRowColumn>
        <a style={linkStyle} href={fandangoLink}>
          ▶️
        </a>
      </TableRowColumn>
    </TableRow>
  );
};

export default MovieRow;
