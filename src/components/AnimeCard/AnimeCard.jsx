import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStoreActions } from "easy-peasy";
import { useQuery } from "graphql-hooks";
import { get } from "lodash";

// MUI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./AnimeCard.styles";

// Custom components
import CardContent from "./CardContent/CardContent";
import EditAnimeButton from "./EditAnimeButton/EditAnimeButton";
import AiringBadge from "./AiringBadge/AiringBadge";

//hooks
import useFindAnime from "../../hooks/useFindAnime";

//GraphQL query
import QUERY from "../../queries/getNextEpisodeAiringTime";

function AnimeCard({ _id }) {
  const [airingTime, setAiringTime] = useState(null);
  const animeData = useFindAnime(_id);
  const showDialogAction = useStoreActions(state => state.dialog.showDialog);
  const updateAnimeData = useStoreActions(state => state.animeList.update);
  const showDialog = () => showDialogAction(_id);
  const classes = useStyles();

  const { loading, error, data } = useQuery(QUERY, {
    variables: { id: animeData.anilistId }
  });

  if (error) console.error(error.messege);

  useEffect(() => {
    if (!data) return;
    const res = get(data, "Media.nextAiringEpisode");
    if (res) {
      updateAnimeData({ ...animeData, latestEpisode: res.episode });
      setAiringTime(res.timeUntilAiring);
    }
  }, [data]); //eslint-disable-line

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} data-testid="AnimeCard">
        <AiringBadge loading={loading} airingTime={airingTime}>
          <Card className={classes.fabFix}>
            <CardMedia
              image={animeData.thumbnailUrl}
              className={classes.animeMedia}
            />
            <CardContent loading={loading} _id={_id} />
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
