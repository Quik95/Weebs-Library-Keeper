import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Dialog from '@material-ui/core/Dialog';

// styles
import useStyles from './EditAnimeDialog.styles';

// Custom components
import DialogTitle from './DialogTitle/DialogTitle';

export default function EditAnimeDialog({ maxWidth, open, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-anime-dialog"
    >
      <DialogTitle onClose={handleClose}>Dr. Stone</DialogTitle>
    </Dialog>
  );
}

EditAnimeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string.isRequired,
};
