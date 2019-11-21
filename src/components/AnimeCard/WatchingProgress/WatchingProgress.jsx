import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// Custom components
import ProgressBar from './ProgressBar';

// styles
import useStyles from './WatchingProgress.styles';

const WatchingProgress = memo(function WatchingProgress(props) {
  const classes = useStyles();

  return (
    <div className={classes.watchingProgress}>
      <Typography variant="caption">10/15</Typography>
      <ProgressBar />
      <div className={classes.progressBarContainer}>
        <ProgressBar
          className="progress--watched"
          tooltipText="Number of episodes you watched"
        />
        <ProgressBar
          className="progress--aired"
          tooltipText="Number of episodes aired"
        />
        <ProgressBar
          className="progress--total"
          tooltipText="Total number of episodes"
        />
      </div>
    </div>
  );
});

WatchingProgress.propTypes = {};

export default WatchingProgress;
