import axios from 'axios'
import { apiBaseUrl } from '../constants'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default async function fetchSavedAnime() {
  const url = apiBaseUrl + '/getAllAnime'

  try {
    const savedAnime = await axios.get(url, { cancelToken: source.token })
    return savedAnime.data
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error(error)
    }
    return []
  }
}

export const cancelFetchSavedAnime = source.cancel