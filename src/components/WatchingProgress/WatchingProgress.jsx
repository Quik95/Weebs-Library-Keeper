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
    </div>
  );
});

WatchingProgress.propTypes = {};

export default WatchingProgress;
