import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Grid from '@material-ui/core/Grid';

import FormInput from './FormInput/FormInput';

function EditAnimeForm(props) {
  return (
    <Grid container spacing={2}>
      <FormInput title="Title" id="title" />
      <FormInput title="Anilist ID" id="anilistId" />
      <FormInput title="Thumbnail URL" id="thumbnailUrl" />
      <FormInput title="Watched Episodes" id="watchedEpisodes" type="number" />
      <FormInput title="Aired Episodes" id="airedEpisodes" type="number" />
      <FormInput title="Total Episodes" id="totalEpisodes" type="number" />
    </Grid>
  );
}

EditAnimeForm.propTypes = {};

export default EditAnimeForm;
