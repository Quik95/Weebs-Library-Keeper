import { createStore, action } from 'easy-peasy'

const store = createStore({
  animeList: {
    list: [],
    add: action((state, payload) => {
      state.list.push(payload)
    }),
    replace: action((state, payload) => {
      state.list = payload
    }),
    update: action((state, payload) => {
      const oldAnimeDataIndex = state.list.findIndex(({ _id }) => _id === payload._id)
      state.list[oldAnimeDataIndex] = payload
    })
  },
  errors: {
    errors: {},
    setErrors: action((state, payload) => { state.errors = payload }),
    clearErrors: action(state => { state.errors = {} })
  },
  dialog: {
    isDialogVisible: false,
    animeId: '',
    showDialog: action((state, payload) => {
      state.isDialogVisible = true;
      state.animeId = payload
    }),
    hideDialog: action((state) => state.isDialogVisible = false),
    updateAnimeData: action((state, payload) => { state.animeData = payload }),
    animeData: {
      title: '',
      anilistId: '',
      thumbnailUrl: '',
      episodes: -1,
      latestEpisode: -1,
      watchedEpisodes: -1,
    }
  }
});

export default store