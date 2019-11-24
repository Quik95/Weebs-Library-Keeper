import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import MuiListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

// temporary
import Icon from '@material-ui/icons/BeachAccess';

// styles
import useStyles from './SearchResults.styles';

const ListItem = memo(function ListItem(props) {
  const classes = useStyles();

  return (
    <MuiListItem data-testid="ListItem">
      <ListItemAvatar>
        <Avatar>
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Dr. Stone"
        secondary="21/11/2019 18:50"
        className={classes.listItemText}
      />
    </MuiListItem>
  );
});

ListItem.propTypes = {};

export default ListItem;
