// eslint-disable-next-line camelcase
export function auth_request (state) {
  state.status = 'loading'
}

// eslint-disable-next-line camelcase
export function auth_success (state, { token, user, warnings }) {
  state.status = 'success'
  state.token = token
  state.user = user
  state.loginWarnings = warnings
}

// eslint-disable-next-line camelcase
export function auth_error (state) {
  state.status = 'error'
}

export function logout (state) {
  state.status = ''
  state.token = ''
  state.user = {}
  state.loginWarnings = []
  state.authConfig = {}
}

// eslint-disable-next-line camelcase
export function auth_config (state, { config }) {
  state.authConfig = config
}

// eslint-disable-next-line camelcase
export function auth_config_Error (state) {
  state.authConfig = {}
}

// eslint-disable-next-line camelcase
export function auth_logout_request (state) {
  state.status = 'loading'
}

// eslint-disable-next-line camelcase
export function auth_logout_error (state) {
  state.status = ''
  state.token = ''
  state.user = {}
  state.loginWarnings = []
  state.authConfig = {}
}

// eslint-disable-next-line camelcase
export function user_accept_terms (state, { id }) {
  state.user.term_and_condition_id = id
}

// eslint-disable-next-line camelcase
export function upload_image_profile (state, { profilePicture }) {
  state.user.profile_picture = profilePicture
}
