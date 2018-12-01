const state = {
    logged: false
};

const getters = {
    isLogged: (state) => state.logged
};

const actions = {
   logout: ({ commit }) => commit('setLogged', false),
   login: ({ commit }) => commit('setLogged', true)
};

const mutations = {
    setLogged: (state, value) => {
        state.logged = value}
};

export default {
    state,
    getters,
    actions,
    mutations
}