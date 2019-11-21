import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import Tooltip from '@material-ui/core/Tooltip';

// styles
import clsx from 'clsx';
import useStyles from './WatchingProgress.styles';

const ProgressBar = memo(function ProgressBar({ className, tooltipText }) {
  const classes = useStyles();

  return (
    <Tooltip title={tooltipText}>
      <div className={clsx(classes.progress, classes[className])} />
    </Tooltip>
  );
});

ProgressBar.propTypes = {
  className: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

export default ProgressBar;
