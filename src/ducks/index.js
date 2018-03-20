const initialState = {
  username: 'Anonymous',
  email: 'anonymous@example.com'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERNAME:
      return {
        ...state,
        username: payload
      }

    case SET_EMAIL:
      return {
        ...state,
        email: payload
      }

    default:
      return state
  }
}

const SET_USERNAME = 'SET_USERNAME'

export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username
})

const SET_EMAIL = 'SET_EMAIL'

export const setEmail = email => ({
  type: SET_EMAIL,
  payload: email
})
