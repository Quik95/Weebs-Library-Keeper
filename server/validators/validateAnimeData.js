const is = require('is_js');

module.exports = ({
  title,
  anilistId,
  thumbnailUrl,
  watchedEpisodes,
  latestEpisode,
  episodes,
}) => {
  const errors = {};

  // validate title
  if (is.not.string(title)) errors.title = 'Must be a valid string.';
  if (is.empty(title)) errors.title = 'Cannot be empty'

  // validate anilistId
  if (is.not.number(anilistId)) errors.anilistId = 'Must be a valid number';
  if (is.empty(anilistId)) errors.anilistId = 'Cannot be empty'

  // validate thumbnailUrl
  if (is.not.string(thumbnailUrl))
    errors.thumbnailUrl = 'Must be a valid string';

  // validate watchedEpisode, latestEpisode, episodes
  if (is.not.null(watchedEpisodes) && is.not.number(watchedEpisodes))
    errors.watchedEpisodes = 'Must be a valid number';
  if (is.not.null(latestEpisode) && is.not.number(latestEpisode))
    errors.latestEpisode = 'Must be a valid number';
  if (is.not.null(episodes) && is.not.number(episodes))
    errors.episodes = 'Must be a valid number';

  return errors;
};
