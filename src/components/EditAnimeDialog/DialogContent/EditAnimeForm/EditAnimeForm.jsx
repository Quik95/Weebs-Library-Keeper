import React from "react";
import PropTypes from "prop-types";
import { useStoreState } from "easy-peasy";

// MUI
import Grid from "@material-ui/core/Grid";
import FormInput from "./FormInput/FormInput";

//helpers
import validateEpisodeNumber from "../../../../helpers/validateEpisodeNumber";

//hooks
import useDialogTempState from "../../../../hooks/useDialogTempState";

function EditAnimeForm({ animeId }) {
  const [animeData, setAnimeData] = useDialogTempState(animeId);
  const errors = useStoreState(state => state.dialog.errors);

  const {
    title,
    anilistId,
    thumbnailUrl,
    watchedEpisodes,
    latestEpisode,
    episodes
  } = animeData;

  const handleChange = (e, id, type) => {
    let value = e.target.value;
    if (type === "number") {
      value = validateEpisodeNumber({
        latestEpisode,
        episodes,
        id,
        value
      });
    }
    setAnimeData({ ...animeData, [id]: value });
  };
  return (
    <form noValidate autoComplete="false">
      <Grid container spacing={2}>
        <FormInput
          error={errors.title}
          title="Title"
          id="title"
          value={title || ""}
          handleChange={handleChange}
        />
        <FormInput
          error={errors.anilistId}
          title="Anilist ID"
          id="anilistId"
          value={anilistId || ""}
          handleChange={handleChange}
        />
        <FormInput
          error={errors.thumbnailUrl}
          title="Thumbnail URL"
          id="thumbnailUrl"
          value={thumbnailUrl || ""}
          handleChange={handleChange}
        />
        <FormInput
          error={errors.watchedEpisodes}
          title="Watched Episodes"
          id="watchedEpisodes"
          type="number"
          value={watchedEpisodes || 0}
          handleChange={handleChange}
        />
        <FormInput
          error={errors.latestEpisode}
          title="Aired Episodes"
          id="latestEpisode"
          type="number"
          value={latestEpisode || 0}
          handleChange={handleChange}
        />
        <FormInput
          error={errors.episodes}
          title="Total Episodes"
          id="episodes"
          type="number"
          value={episodes || 0}
          handleChange={handleChange}
        />
      </Grid>
    </form>
  );
}

EditAnimeForm.propTypes = {
  animeId: PropTypes.string.isRequired
};

export default EditAnimeForm;
