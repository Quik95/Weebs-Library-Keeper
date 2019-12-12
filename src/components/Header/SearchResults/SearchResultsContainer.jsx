import React from 'react';
import PropTypes from 'prop-types';

// MUI
import List from '@material-ui/core/List';

// styles
import useStyles from './SearchResults.styles';

// custom components
import ListItem from './ListItem';

export default function SearchResultsContainer({ open }) {
  const classes = useStyles();

  if (!open) return null;
  return (
    <List className={classes.listContainer} data-testid="SearchContainer">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <ListItem key={i} />
      ))}
    </List>
  );
}

SearchResultsContainer.propTypes = {
  open: PropTypes.bool.isRequired,
};
