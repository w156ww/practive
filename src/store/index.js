import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ele: null
    },
    mutations: {
        setEle(state, { ele }) {
            state.ele = ele;
        }
    },
    actions: {},
    modules: {}
});
