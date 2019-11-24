import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
import useStyles from './AnimeCard.styles';

// Custom components
import WatchingProgress from './WatchingProgress/WatchingProgress';
import EditAnimeButton from './EditAnimeButton/EditAnimeButton';

function AnimeCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={3} data-testid="AnimeCard">
      <Card className={classes.fabFix}>
        <CardMedia
          image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-5p1MKBlGxZFF.jpg"
          className={classes.animeMedia}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1" align="center" noWrap gutterBottom>
            Dr. Stone
          </Typography>
          <WatchingProgress />
        </CardContent>
        <EditAnimeButton />
      </Card>
    </Grid>
  );
}

AnimeCard.propTypes = {};

export default AnimeCard;
