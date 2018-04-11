import Vuex from 'vuex'

export const state = () => ({
  open: false,
  contact: false,
  contextNavEl: null,
  prevContextNavEl: null,
  send: false,
  finish: false,
  currentItem: null
})

export const mutations = {
  notFinished(state) {
    state.finish = false
  },
  finished(state) {
    state.finish = true
  },
  notSent(state) {
    state.send = false
  },
  sent(state) {
    state.send = true
  },
  contacted(state) {
    state.contact = true
  },
  opened(state) {
    state.open = true
  },
  closed(state) {
    state.open = false
  },
  setCurrentItem(state, string) {
    state.currentItem = string
  },
  setContextNavEl(state, el) {
    state.contextNavEl = el
  },
  setPrevContextNavEl(state, el) {
    state.prevContextNavEl = el
  }
}
