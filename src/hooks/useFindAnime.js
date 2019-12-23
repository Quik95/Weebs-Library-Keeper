import { useMemo } from 'react'
import { useStoreState } from 'easy-peasy'

export default function useFindAnime(animeId) {
  const animeList = useStoreState(state => state.animeList.list)
  const foundAnime = useMemo(() => animeList.find(({ _id }) => _id === animeId), [animeId, animeList])
  return foundAnime
}