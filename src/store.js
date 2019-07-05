import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
  items:[]
}

const mutations={
  mutations_addItme(state, item) {
    state.items.push(item);
  },
  mutations_delItem(state, id) {
    state.items.splice(id-1, 1);
  },
  mutations_setActive(state, para){
    state.items.forEach((v, i, a) => {
      if (v.id === para.id) {
        state.items[i].isActive = para.bool;
        return 0;
      }
    });    
  },
  mutations_setComplete(state, para){
    state.items.forEach((v, i, a) => {
      if (v.id === para.id) {
        state.items[i].isComplete = para.bool;
        return 0;
      }
    });    
  }
}

const actions={
  actions_addItem({ dispatch, getters, commit }, item) {
    commit("mutations_addItme", item);
  },
  actions_delItem({ dispatch, getters, commit }, id) {
    commit("mutations_delItem", id);
  },
  actions_setActive({ dispatch, getters, commit }, para) {
    commit("mutations_setActive", para);
  },
  actions_setComplete({ dispatch, getters, commit }, para) {
    commit("mutations_setComplete", para);
  },
}

const getters={
  getters_items(state) {
    return state.items;
  },
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});