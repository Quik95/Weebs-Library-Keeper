import axios from 'axios'
import { apiBaseUrl } from '../../constants'

export default async function sendAddRequest(animeData) {
  try {
    const url = apiBaseUrl + '/addAnime'
    const res = await axios.post(url, { ...animeData })
    return res.data
  } catch (error) {
    console.error(error)
  }
}