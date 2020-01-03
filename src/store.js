import { createStore, action } from 'easy-peasy'
import { remove } from 'lodash'

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
    }),
    remove: action((state, payload) => {
      remove(state.list, (n) => n._id === payload)
    })
  },
  dialog: {
    isDialogVisible: false,
    errors: {},
    setErrors: action((state, payload) => { state.errors = payload }),
    animeId: '',
    showDialog: action((state, payload) => {
      state.isDialogVisible = true;
      state.animeId = payload
    }),
    hideDialog: action((state) => { state.isDialogVisible = false; state.animeData = {}; state.animeId = ''; state.errors = {} }),
    updateAnimeData: action((state, payload) => { state.animeData = payload }),
    animeData: {}
  }
});

export default store