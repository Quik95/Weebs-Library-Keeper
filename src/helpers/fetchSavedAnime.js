import axios, { CancelToken } from 'axios'
import { apiBaseUrl } from '../constants'

let cancel;

export default async function fetchSavedAnime() {
  const url = apiBaseUrl + '/getAllAnime'

  try {
    const savedAnime = await axios.get(url, { cancelToken: new CancelToken(c => cancel = c) })
    return savedAnime.data
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error(error)
    }
    return []
  }
}

export const cancelFetchSavedAnime = cancel