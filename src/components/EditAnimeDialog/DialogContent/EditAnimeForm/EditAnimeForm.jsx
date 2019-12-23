import React from "react";
import PropTypes from "prop-types";
import { useStoreState } from "easy-peasy";

// MUI
import Grid from "@material-ui/core/Grid";

import FormInput from "./FormInput/FormInput";

function EditAnimeForm({ animeId }) {
  const animeData = useStoreState(state =>
    state.animeList.list.find(({ _id }) => _id === animeId)
  );

  const {
    title,
    anilistId,
    thumbnailUrl,
    watchedEpisodes,
    latestEpisode,
    episodes
  } = animeData;

  return (
    <form noValidate autoComplete="false">
      <Grid container spacing={2}>
        <FormInput title="Title" id="title" value={title} />
        <FormInput title="Anilist ID" id="anilistId" value={anilistId} />
        <FormInput
          title="Thumbnail URL"
          id="thumbnailUrl"
          value={thumbnailUrl}
        />
        <FormInput
          title="Watched Episodes"
          id="watchedEpisodes"
          type="number"
          value={watchedEpisodes}
        />
        <FormInput
          title="Aired Episodes"
          id="airedEpisodes"
          type="number"
          value={latestEpisode}
        />
        <FormInput
          title="Total Episodes"
          id="totalEpisodes"
          type="number"
          value={episodes}
        />
      </Grid>
    </form>
  );
}

EditAnimeForm.propTypes = {
  animeId: PropTypes.string.isRequired
};

export default EditAnimeForm;
