import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

// styles
import useStyles from './EditAnimeButton.styles';

const EditAnimeButton = memo(function EditAnimeButton({ handleOpenDialog }) {
  const classes = useStyles();

  return (
    <Tooltip
      title="Click to edit anime"
      aria-label="Edit anime"
      data-testid="EditAnimeButton"
    >
      <Fab
        size="small"
        color="secondary"
        aria-label="Edit anime"
        className={classes.editButton}
        onClick={handleOpenDialog}
      >
        <EditIcon className={classes.editIcon} />
      </Fab>
    </Tooltip>
  );
});

EditAnimeButton.propTypes = {
  handleOpenDialog: PropTypes.func.isRequired,
};

export default EditAnimeButton;
