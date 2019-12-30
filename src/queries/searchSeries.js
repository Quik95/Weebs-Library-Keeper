export default `
query ($query: String) {
  Page {
    media(search: $query, type: ANIME) {
      id
      title {romaji}
      coverImage {medium, extraLarge}
      season
      startDate {year} 
    }
  }
}`