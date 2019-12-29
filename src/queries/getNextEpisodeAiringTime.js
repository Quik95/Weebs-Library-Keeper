export default `
query getNextEpisodeAiringTime($id: Int!) {
    Media(id: $id) {
      episodes
      nextAiringEpisode {
        timeUntilAiring
        episode
    }
  }
}

`