import React from 'react';
import PropTypes from 'prop-types';

// MUI
import MuiDialogContent from '@material-ui/core/DialogContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// styles
import useStyles from './DialogContent.style';

// Custom components
import EditAnimeForm from './EditAnimeForm/EditAnimeForm';

function DialogContent({ animeId }) {
  const classes = useStyles();

  return (
    <MuiDialogContent dividers>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CardMedia
            image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-5p1MKBlGxZFF.jpg"
            className={classes.animeThumbnail}
          />
        </Grid>
        <Grid item xs={12}>
          <EditAnimeForm />
        </Grid>
      </Grid>
    </MuiDialogContent>
  );
}

DialogContent.propTypes = {
  animeId: PropTypes.string.isRequired,
};

export default DialogContent;
