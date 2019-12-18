import { createStore, action } from 'easy-peasy'

const store = createStore({
  animeList: {
    list: [],
    add: action((state, payload) => {
      state.list.push(payload)
    }),
    replace: action((state, payload) => {
      state.list = payload
    })
  },
  errors: {
    errors: {},
    setErrors: action((state, payload) => { state.errors = payload }),
    clearErrors: action(state => { state.errors = {} })
  },
  dialog: {
    isDialogVisible: false,
    showDialog: action((state) => state.isDialogVisible = true),
    hideDialog: action((state) => state.isDialogVisible = false),
  }
});

export default store