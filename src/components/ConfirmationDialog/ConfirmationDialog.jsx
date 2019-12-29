import React, { memo } from "react";
import PropTypes from "prop-types";

//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog = memo(function ConfirmationDialog({
  handleClose,
  handleConfirm,
  open,
  dialogText
}) {
  const groupCloseAndConfirm = () => {
    handleConfirm();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {dialogText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={groupCloseAndConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
});

ConfirmationDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  dialogText: PropTypes.string.isRequired
};

export default ConfirmationDialog;
