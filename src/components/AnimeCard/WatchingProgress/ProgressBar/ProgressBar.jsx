import React, { memo } from "react";
import PropTypes from "prop-types";

// MUI
import Tooltip from "@material-ui/core/Tooltip";

// styles
import clsx from "clsx";
import useStyles from "../WatchingProgress.styles";

const ProgressBar = memo(function ProgressBar({
  className,
  tooltipText,
  width = 100
}) {
  const classes = useStyles();

  return (
    <Tooltip title={tooltipText} data-testid="ProgressBar">
      <div
        className={clsx(classes.progress, classes[className])}
        style={{ width: `${width}%` }}
      />
    </Tooltip>
  );
});

ProgressBar.propTypes = {
  className: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

export default ProgressBar;
