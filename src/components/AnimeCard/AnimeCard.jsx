import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStoreState } from "easy-peasy";

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
import EditAnimeDialog from "../EditAnimeDialog/EditAnimeDialog";
import AiringBadge from "./AiringBadge/AiringBadge";

function AnimeCard({ _id }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { title, thumbnailUrl } = useStoreState(state =>
    state.animeList.list.find(anime => anime._id === _id)
  );

  const classes = useStyles();

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

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
            <EditAnimeButton handleOpenDialog={handleOpenDialog} />
          </Card>
        </AiringBadge>
      </Grid>
      <EditAnimeDialog
        open={isDialogOpen}
        maxWidth="md"
        handleClose={handleCloseDialog}
      />
    </>
  );
}

AnimeCard.propTypes = {
  _id: PropTypes.string.isRequired
};

export default AnimeCard;
