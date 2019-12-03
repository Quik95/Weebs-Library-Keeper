import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// styles
import useStyles from '../EditAnimeDialog.styles';

const DialogTitle = memo(function DialogTitle({ onClose, children, ...other }) {
  const classes = useStyles();

  return (
    <MuiDialogTitle
      disableTypography
      className={classes.dialogTitle}
      {...other}
    >
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

DialogTitle.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default DialogTitle;
