import Vue from "vue";
import Vuex, { GetterTree } from "vuex";

Vue.use(Vuex);

interface IState {
  main: string
}

const state: IState = {
  main: 'this is the main store state'
}

const getters: GetterTree<IState, IState> = {
  support: (state: any) => state.support
};

export default new Vuex.Store({
  state: state,
  mutations: {},
  actions: {},
  modules: {},
  getters: getters
});
