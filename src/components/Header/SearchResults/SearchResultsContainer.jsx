import React from 'react';

// MUI
import List from '@material-ui/core/List';

// styles
import useStyles from './SearchResults.styles';

// custom components
import ListItem from './ListItem';

export default function SearchResultsContainer() {
  const classes = useStyles();

  return (
    <List className={classes.listContainer} data-testid="SearchContainer">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <ListItem key={i} />
      ))}
    </List>
  );
}
