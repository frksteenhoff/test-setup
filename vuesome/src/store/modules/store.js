const state = {
    count: 0,
    gridsize: 4,
    message: "Hello, there!",
    seen: true,
    todos: [
      'Learn JavaScript',
      'Learn Vue',
      'Build something awesome'
    ]
 };
 
const getters = {
    //seen: state => state.seen,
    count: state => state.count,
    message: state => state.message,
};

const actions = { // commit mutations, asynchronous
    increment(context) {
        context.commit('increment')
    },
    decrement(context) {
        context.commit('decrement')
    },
    incrementN(context, amount) {
        context.commit('incrementN', amount)
    },
    toggle(context) {
        context.commit('toggle')
    }
};

const mutations = { // synchronous
    toggle(state) {
        state.seen = !state.seen
    },
    increment(state) {
        state.count++
    },    
    incrementN(state, n) {
        state.count += n
    }, 
    decrement(state) {
        state.count--;
    }
 };
 
 export default {
    state,
    getters,
    actions,
    mutations
 }