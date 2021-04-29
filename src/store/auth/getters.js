export function isLoggedIn (state) {
  return !!state.token
}

export function authStatus (state) {
  return state.status
}

export function token (state) {
  return state.token
}

export function userLogged (state) {
  return state.user
}

export function hasLoginWarnings (state) {
  return state.loginWarnings.length > 0
}

export function logicoins (state) {
  return state.logicoins
}

export function authConfig (state) {
  return state.authConfig
}
