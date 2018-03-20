import { connect } from 'react-redux'

import Username from './component'

import { setUsername } from '../ducks'

export default connect(
  state => ({
    username: state.username
  }),
  dispatch => ({
    handleUsernameChange: event => dispatch(setUsername(event.target.value))
  })
)(Username)
