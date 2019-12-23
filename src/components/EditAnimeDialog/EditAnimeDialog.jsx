import React from "react";
import PropTypes from "prop-types";
import { useStoreState } from "easy-peasy";

// MUI
import Dialog from "@material-ui/core/Dialog";

// Custom components
import DialogTitle from "./DialogTitle/DialogTitle";
import DialogActions from "./DialogActions/DialogActions";
import DialogContent from "./DialogContent/DialogContent";

//hooks
import useFindAnime from "../../hooks/useFindAnime";

export default function EditAnimeDialog({ maxWidth, open, handleClose }) {
  const animeId = useStoreState(state => state.dialog.animeId);
  const animeData = useFindAnime(animeId);
  if (!animeData) return null; //TODO
  return (
    <Dialog
      maxWidth={maxWidth}
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-anime-dialog"
    >
      <DialogTitle onClose={handleClose}>{animeData.title}</DialogTitle>
      <DialogContent animeData={animeData} />
      <DialogActions handleClose={handleClose} />
    </Dialog>
  );
}

EditAnimeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string.isRequired
};
