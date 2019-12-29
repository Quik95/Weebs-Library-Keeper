import React from "react";
import PropTypes from "prop-types";

//MUI
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

//styles
import useStyles from "../AnimeCard.styles";
import clsx from "clsx";

//Custom components
import WatchingProgress from "../WatchingProgress/WatchingProgress";

//hooks
import useFindAnime from "../../../hooks/useFindAnime";

const CardContent = function CardContent({ loading, _id }) {
  const classes = useStyles();
  const { title, watchedEpisodes, latestEpisode, episodes } = useFindAnime(_id);

  if (loading) {
    return (
      <MuiCardContent className={clsx(classes.cardContent, classes.spinnerFix)}>
        <CircularProgress size={40} variant="indeterminate" color="primary" />
      </MuiCardContent>
    );
  }

  return (
    <MuiCardContent className={classes.cardContent}>
      <Typography variant="body1" align="center" noWrap gutterBottom>
        {title}
      </Typography>
      <WatchingProgress
        watched={watchedEpisodes}
        aired={latestEpisode}
        total={episodes}
      />
    </MuiCardContent>
  );
};

CardContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired
};

export default CardContent;
