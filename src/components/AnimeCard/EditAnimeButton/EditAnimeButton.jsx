import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

// styles
import useStyles from './EditAnimeButton.styles';

const EditAnimeButton = memo(function EditAnimeButton(props) {
  const classes = useStyles();

  return (
    <Fab
      color="secondary"
      aria-label="Edit anime"
      className={classes.editButton}
      size="small"
    >
      <EditIcon className={classes.icon} />
    </Fab>
  );
});

EditAnimeButton.propTypes = {};

export default EditAnimeButton;
