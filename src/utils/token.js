const USER_TOKEN_KEY = 'user-token'

export function setJwtToken (token) {
  localStorage.setItem(USER_TOKEN_KEY, token)
}

export function getJwtToken () {
  return localStorage.getItem(USER_TOKEN_KEY)
}
