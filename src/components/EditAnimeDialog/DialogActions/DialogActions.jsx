import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';

// styles
import useStyles from './DialogActions.styles';
import clsx from 'clsx'

const DialogActions = memo(function DialogActions({ handleClose }) {
  const classes = useStyles();

  return (
    <MuiDialogActions className={classes.dialogActions}>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        className={clsx(classes.deleteButton, classes.button)}
      >
        Delete
      </Button>
      <Button variant="contained" color="primary" className={classes.button} startIcon={<CloseIcon />}>
        Discard
      </Button>
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        className={clsx(classes.saveButton, classes.button)}
      >
        Save
      </Button>
    </MuiDialogActions>
  );
});

DialogActions.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default DialogActions;
