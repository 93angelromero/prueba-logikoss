export default function () {
  return {
    status: '',
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    loginWarnings: localStorage.getItem('loginWarnings') ? JSON.parse(localStorage.getItem('loginWarnings')) : [],
    authConfig: localStorage.getItem('authConfig') ? JSON.parse(localStorage.getItem('authConfig')) : {},
    logicoins: 0
  }
}
