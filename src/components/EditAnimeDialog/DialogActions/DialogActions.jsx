import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStoreActions, useStoreState } from "easy-peasy";

// MUI
import MuiDialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

// styles
import useStyles from "./DialogActions.styles";
import clsx from "clsx";

//Custom Components
import ConfirmationDialog from "../../ConfirmationDialog/ConfirmationDialog";

//helpers
import updateAnimeRequest from "../../../helpers/server_requests/updateAnime";
import deleteAnimeRequest from "../../../helpers/server_requests/deleteAnime";

const DialogActions = function DialogActions({ handleClose }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const saveChanges = useStoreActions(state => state.animeList.replace);
  const dialogState = useStoreState(state => state.dialog.animeData);
  const removeAnime = useStoreActions(state => state.animeList.remove);

  const handleSave = async () => {
    const res = await updateAnimeRequest(dialogState);
    saveChanges(res);
    handleClose();
  };

  const handleDelete = async () => {
    const status = await deleteAnimeRequest(dialogState._id);
    if (status !== 204) return;
    removeAnime(dialogState._id);
    handleClose();
  };

  const handleOpenConfirmationDialog = () => setOpen(true);
  const handleCloseConfirmationDialog = () => setOpen(false);

  return (
    <>
      <MuiDialogActions className={classes.dialogActions}>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          className={clsx(classes.deleteButton, classes.button)}
          onClick={handleOpenConfirmationDialog}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CloseIcon />}
          onClick={handleClose}
        >
          Discard
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          startIcon={<SaveIcon />}
          className={clsx(classes.saveButton, classes.button)}
        >
          Save
        </Button>
      </MuiDialogActions>
      <ConfirmationDialog
        open={open}
        dialogText="Do you really want to delete this anime?"
        handleConfirm={handleDelete}
        handleClose={handleCloseConfirmationDialog}
      />
    </>
  );
};

DialogActions.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default DialogActions;
