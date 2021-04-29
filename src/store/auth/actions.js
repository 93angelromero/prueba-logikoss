import Vue from 'vue'

export function login ({ commit }, credentials) {
  return new Promise((resolve, reject) => {
    commit('auth_request')
    Vue.prototype.$axios.post(`${process.env.VUE_APP_API_URL}/auth/login`, credentials, { headers: { 'x-app': 'B2C' } })
      .then((response) => {
        const token = response.data.access_token
        const { warnings } = response.data
        const { user } = response.data
        localStorage.setItem('token', token)
        localStorage.setItem('loginWarnings', JSON.stringify(warnings))
        localStorage.setItem('user', JSON.stringify(user))
        Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
        commit('auth_success', { token, user, warnings })
        resolve(response.data)
      })
      .catch((err) => {
        commit('auth_error')
        localStorage.removeItem('token')
        localStorage.removeItem('loginWarnings')
        localStorage.removeItem('user')
        reject(err)
      })
  })
}

export function logout ({ commit }) {
  return new Promise((resolve, reject) => {
    commit('auth_logout_request')
    Vue.prototype.$axios.post(`${process.env.VUE_APP_API_URL}/auth/logout`)
      .then(() => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('loginWarnings')
        localStorage.removeItem('user')
        localStorage.removeItem('authConfig')
        delete Vue.prototype.$axios.defaults.headers.common.Authorization
        resolve()
      })
      .catch((err) => {
        commit('auth_logout_error')
        localStorage.removeItem('token')
        localStorage.removeItem('loginWarnings')
        localStorage.removeItem('user')
        localStorage.removeItem('authConfig')
        delete Vue.prototype.$axios.defaults.headers.common.Authorization
        reject(err)
      })
  })
}
