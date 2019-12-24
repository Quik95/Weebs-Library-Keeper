import { useStoreActions, useStoreState } from 'easy-peasy'

//hooks
import useFindAnime from './useFindAnime'

export default function useDialogTempState(animeId) {
  const updateAnimeData = useStoreActions(state => state.dialog.updateAnimeData)
  const animeData = useFindAnime(animeId)
  const tempAnimeData = useStoreState(state => state.dialog.animeData)

  //TODO
  if (tempAnimeData.episodes === -1) updateAnimeData(animeData)
  return [tempAnimeData, updateAnimeData]
}