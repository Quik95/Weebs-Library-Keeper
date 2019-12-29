export default `
query getNextEpisodeAiringTime($id: Int!) {
    Media(id: $id) {
      nextAiringEpisode {
        timeUntilAiring
        episode
    }
  }
}

`