import React from "react";
import PropTypes from "prop-types";
import { useStoreState, useStoreActions } from "easy-peasy";

// MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// styles
import useStyles from "./AnimeCard.styles";

// Custom components
import WatchingProgress from "./WatchingProgress/WatchingProgress";
import EditAnimeButton from "./EditAnimeButton/EditAnimeButton";
import AiringBadge from "./AiringBadge/AiringBadge";

function AnimeCard({ _id }) {
  const { title, thumbnailUrl } = useStoreState(state =>
    state.animeList.list.find(anime => anime._id === _id)
  );
  const showDialogAction = useStoreActions(state => state.dialog.showDialog);
  const showDialog = () => showDialogAction(_id);

  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} data-testid="AnimeCard">
        <AiringBadge airingIn={1424123}>
          <Card className={classes.fabFix}>
            <CardMedia image={thumbnailUrl} className={classes.animeMedia} />
            <CardContent className={classes.cardContent}>
              <Typography variant="body1" align="center" noWrap gutterBottom>
                {title}
              </Typography>
              <WatchingProgress />
            </CardContent>
            <EditAnimeButton handleOpenDialog={showDialog} />
          </Card>
        </AiringBadge>
      </Grid>
    </>
  );
}

AnimeCard.propTypes = {
  _id: PropTypes.string.isRequired
};

export default AnimeCard;
