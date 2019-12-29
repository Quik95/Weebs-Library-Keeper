import React from "react";
import PropTypes from "prop-types";

//MUI
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";

//styles
import useStyles from "./AiringBadge.style";

//Custom components
import BadgeContent from "./BadgeContent/BadgeContent";

function AiringBadge({ airingTime, loading, children }) {
  const classes = useStyles();

  if (loading) {
    return (
      <Badge
        badgeContent={
          <CircularProgress color="primary" size={20} variant="indeterminate" />
        }
        color="secondary"
        className={classes.gridFix}
      >
        {children}
      </Badge>
    );
  }

  return (
    <Badge
      invisible={!airingTime}
      badgeContent={<BadgeContent timeUntilAiring={airingTime} />}
      color="secondary"
      className={classes.gridFix}
    >
      {children}
    </Badge>
  );
}

AiringBadge.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  airingTime: PropTypes.number
};

export default AiringBadge;
