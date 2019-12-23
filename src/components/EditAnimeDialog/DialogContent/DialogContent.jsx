import React from "react";
import PropTypes from "prop-types";

// MUI
import MuiDialogContent from "@material-ui/core/DialogContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./DialogContent.style";

// Custom components
import EditAnimeForm from "./EditAnimeForm/EditAnimeForm";

function DialogContent({ animeData: { thumbnailUrl, _id } }) {
  const classes = useStyles();

  return (
    <MuiDialogContent dividers>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <CardMedia image={thumbnailUrl} className={classes.animeThumbnail} />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <EditAnimeForm animeId={_id} />
        </Grid>
      </Grid>
    </MuiDialogContent>
  );
}

DialogContent.propTypes = {
  animeData: PropTypes.object.isRequired
};

export default DialogContent;
