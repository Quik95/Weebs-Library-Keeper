import axios from 'axios'
import { apiBaseUrl } from '../../constants'

export default async function sendDeleteRequest(animeId) {
  try {
    const url = apiBaseUrl + '/deleteAnime/' + animeId
    const res = await axios.delete(url)
    return res.status
  } catch (error) {
    console.error(error)
  }
}