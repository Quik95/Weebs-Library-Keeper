import React, { memo } from "react";
import PropTypes from "prop-types";

//MUI
import Tooltip from "@material-ui/core/Tooltip";

const BadgeContent = memo(function BadgeContent({ relTime, absTime }) {
  return (
    <Tooltip title={absTime} placement="top">
      <span>{relTime}</span>
    </Tooltip>
  );
});

BadgeContent.propTypes = {
  relTime: PropTypes.string.isRequired,
  absTime: PropTypes.string.isRequired
};

export default BadgeContent;
