import axios from 'axios'
import { apiBaseUrl } from '../../constants'

export default async function sendUpdateRequest(animeData) {
  const _id = animeData._id
  const url = apiBaseUrl + '/updateAnime/' + _id
  const res = await axios.patch(url, { ...animeData })
  return res.data

}