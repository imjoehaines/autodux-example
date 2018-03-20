import { connect } from 'react-redux'

import UsernameForm from './component'
import { setUsername, getUsername } from '../ducks'

export default connect(
  state => ({
    username: getUsername(state)
  }),
  dispatch => ({
    handleUsernameChange: event => dispatch(setUsername(event.target.value))
  })
)(UsernameForm)
