import axios from 'axios'

export const state = {
    user: null,
}

export const getters = {
    user: state => state.user,
    check: state => state.user !== null
}

export const mutations = {
    LOGIN_SUCCESS(state, user) {
        state.user = user
    },
    LOGOUT(state) {
        state.user = null
    },
}

export const actions = {
    async login ({ commit }, inputs) {
        await axios.post('/api/auth/login', inputs).then(response => {
            let data = response.data;
            if(data.success){
                commit('LOGIN_SUCCESS', { name: data.data.name, token: data.data.token })
                window.localStorage.setItem('token', data.data.token);
            }
        });
    },
    async verify ({ commit }) {
        let token = window.localStorage.getItem('token')

        await axios.get('/api/auth/user', { headers: { 'Authorization': `Bearer ${token}` } }).then(response => {
            let data = response.data;
            if(data.success){
                commit('LOGIN_SUCCESS', { name: data.data.name, token })
            }
        });
    },
    async logout ({ commit }) {
        await axios.post('/api/auth/logout').then(response => {
            commit('LOGOUT')
            window.localStorage.removeItem('token');
        });
    },
}
