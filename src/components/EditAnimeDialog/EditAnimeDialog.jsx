import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// styles
import useStyles from './EditAnimeDialog.styles';

export default function EditAnimeDialog({ maxWidth, open, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-anime-dialog"
    >
      <DialogTitle id="edit-anime-dialog-anime-title">
        Optional sizes
      </DialogTitle>
    </Dialog>
  );
}

EditAnimeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string.isRequired,
};
