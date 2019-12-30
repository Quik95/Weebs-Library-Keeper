import React, { memo } from "react";
import PropTypes from "prop-types";

// MUI
import MuiListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

// temporary
import Icon from "@material-ui/icons/BeachAccess";

// Icons
import AddIcon from "@material-ui/icons/Add";

// styles
import useStyles from "./SearchResults.styles";

const ListItem = memo(function ListItem({ data }) {
  const classes = useStyles();
  const season = data.season || "??";
  const startYear = data.startDate.year || "??";
  const title = data.title.romaji || "??";

  return (
    <MuiListItem data-testid="ListItem">
      <ListItemAvatar>
        <Avatar alt={title} src={data.coverImage.medium} variant="square" />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={`${season} - ${startYear}`}
        className={classes.listItemText}
      />
      <IconButton>
        <AddIcon />
      </IconButton>
    </MuiListItem>
  );
});

ListItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default ListItem;
