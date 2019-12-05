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

const DialogActions = memo(function DialogActions({ handleClose }) {
  const classes = useStyles();

  return (
    <MuiDialogActions className={classes.dialogActions}>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        className={classes.deleteButton}
      >
        Delete
      </Button>
      <Button variant="contained" color="primary" startIcon={<CloseIcon />}>
        Discard
      </Button>
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        className={classes.saveButton}
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
