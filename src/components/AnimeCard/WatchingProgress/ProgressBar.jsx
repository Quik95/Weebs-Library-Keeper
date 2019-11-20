import React, { memo } from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import useStyles from './WatchingProgress.styles';

const ProgressBar = memo(function ProgressBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.progressBarContainer}>
      <div className={clsx(classes['progress--watched'], classes.progress)} />
      <div className={clsx(classes['progress--aired'], classes.progress)} />
      <div className={clsx(classes['progress--total'], classes.progress)} />
    </div>
  );
});

ProgressBar.propTypes = {};

export default ProgressBar;
