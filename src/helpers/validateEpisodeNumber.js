export default ({ latestEpisode, episodes, id, value }) => {
  try {
    let parsed = parseInt(value)
    if (parsed < 0) return 0;

    switch (id) {
      case 'watchedEpisodes': {
        if (value > latestEpisode) parsed = latestEpisode
        break;
      }
      case 'latestEpisode': {
        if (value > episodes) parsed = episodes
        break;
      }
      default: {
        return parsed;
      }
    }

    return parsed
  } catch (error) {
    console.error(error)
    return 0
  }
}