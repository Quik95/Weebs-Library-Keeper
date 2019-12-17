import { createStore, action } from 'easy-peasy'

const store = createStore({
  animeList: {
    list: [],
    add: action((state, payload) => {
      state.list.push(payload)
    })
  },
  errors: {
    errors: {},
    setErrors: action((state, payload) => { state.errors = payload }),
    clearErrors: action(state => { state.errors = {} })
  }
});

export default store