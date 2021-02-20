export default {
    namespaced: true,
    state(){
        return{
            token: localStorage.getItem('jwt-token')
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(state, getters){
            return !!getters.token 
        }
    },
    actions: {
        async login( { commit }, payload){
            commit('setToken', 'TEST TOKEN')
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token
            localStorage.setItem('jwt-token', token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem('jwt-token')
        }
    }
}