import React from "react";
import PropTypes from "prop-types";

// MUI
import Dialog from "@material-ui/core/Dialog";

// Custom components
import DialogTitle from "./DialogTitle/DialogTitle";
import DialogActions from "./DialogActions/DialogActions";
import DialogContent from "./DialogContent/DialogContent";

export default function EditAnimeDialog({ maxWidth, open, handleClose }) {
  return (
    <Dialog
      maxWidth={maxWidth}
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-anime-dialog"
    >
      <DialogTitle onClose={handleClose}>Dr. Stone</DialogTitle>
      <DialogContent animeId="to-do" />
      <DialogActions handleClose={handleClose} />
    </Dialog>
  );
}

EditAnimeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string.isRequired
};
