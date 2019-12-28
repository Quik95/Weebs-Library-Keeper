import React, { memo } from "react";
import PropTypes from "prop-types";

//MUI
import Tooltip from "@material-ui/core/Tooltip";

//helpers
import formatDate from "../../../../helpers/formatDate";

const BadgeContent = memo(function BadgeContent({ timeUntilAiring }) {
  if (!timeUntilAiring) return null;

  const { relTime, absTime } = formatDate(timeUntilAiring);

  return (
    <Tooltip title={absTime} placement="top">
      <span>{relTime}</span>
    </Tooltip>
  );
});

BadgeContent.propTypes = {
  timeUntilAiring: PropTypes.number
};

export default BadgeContent;
