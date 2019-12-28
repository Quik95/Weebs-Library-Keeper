import axios from 'axios'
import { apiBaseUrl } from '../../constants'

export default async function sendUpdateRequest(animeData) {
  try {
    const _id = animeData._id
    const url = apiBaseUrl + '/updateAnime/' + _id
    const res = await axios.patch(url, { ...animeData })
    return res.data
  } catch (error) {
    console.error(error)
  }
}