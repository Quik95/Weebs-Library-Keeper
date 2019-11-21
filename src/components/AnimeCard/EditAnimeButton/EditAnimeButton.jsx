import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

// styles
import useStyles from './EditAnimeButton.styles';

const EditAnimeButton = memo(function EditAnimeButton(props) {
  const classes = useStyles();

  return (
    <Tooltip title="Click to edit anime" aria-label="Edit anime">
      <Fab
        size="small"
        color="secondary"
        aria-label="Edit anime"
        className={classes.editButton}
      >
        <EditIcon className={classes.editIcon} />
      </Fab>
    </Tooltip>
  );
});

EditAnimeButton.propTypes = {};

export default EditAnimeButton;
