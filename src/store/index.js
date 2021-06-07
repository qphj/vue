import Vue from "vue";
import Vuex from "vuex"

//安装
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        }
    },
    actions: {},
    getters: {}, modules: {}
});

export default store


