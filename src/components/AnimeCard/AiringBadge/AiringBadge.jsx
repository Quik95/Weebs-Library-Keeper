import React from "react";
import PropTypes from "prop-types";

//MUI
import Badge from "@material-ui/core/Badge";

//styles
import useStyles from "./AiringBadge.style";

//Custom components
import BadgeContent from "./BadgeContent/BadgeContent";

function AiringBadge({ airingIn, children }) {
  const classes = useStyles();

  return (
    <Badge
      invisible={!airingIn}
      badgeContent={<BadgeContent absTime="15/12/2019 18:29" relTime="9h" />}
      color="secondary"
      className={classes.gridFix}
    >
      {children}
    </Badge>
  );
}

AiringBadge.propTypes = {
  airingIn: PropTypes.number,
  children: PropTypes.element.isRequired
};

export default AiringBadge;
