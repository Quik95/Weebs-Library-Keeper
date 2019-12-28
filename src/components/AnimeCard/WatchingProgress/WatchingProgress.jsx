import React, { memo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

// Custom components
import ProgressBar from "./ProgressBar/ProgressBar";

// styles
import useStyles from "./WatchingProgress.styles";

const WatchingProgress = memo(function WatchingProgress({
  watched,
  aired,
  total
}) {
  const classes = useStyles();

  const watchedWidth = (watched / total) * 100;
  const airedWidth = (aired / total) * 100;

  return (
    <div className={classes.watchingProgress} data-testid="WatchingProgress">
      <Typography variant="caption">{`${watched}/${total || "??"}`}</Typography>
      <div className={classes.progressBarContainer}>
        <ProgressBar
          className="progress--watched"
          tooltipText="Number of episodes you watched"
          width={watchedWidth}
        />
        <ProgressBar
          className="progress--aired"
          tooltipText="Number of episodes aired"
          width={airedWidth}
        />
        <ProgressBar
          className="progress--total"
          tooltipText="Total number of episodes"
        />
      </div>
    </div>
  );
});

WatchingProgress.propTypes = {
  watched: PropTypes.number,
  aired: PropTypes.number,
  total: PropTypes.number
};

export default WatchingProgress;
