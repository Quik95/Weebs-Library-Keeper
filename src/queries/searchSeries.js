export default `
query ($query: String) {
  Page {
    media(search: $query, type: ANIME, sort: [SEARCH_MATCH, START_DATE_DESC]) {
      id
      title {romaji}
      coverImage {medium, extraLarge}
      season
      startDate {year} 
    }
  }
}`
