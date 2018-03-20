import { connect } from 'react-redux'

import Email from './component'

import { setEmail } from '../ducks'

export default connect(
  state => ({
    email: state.email
  }),
  dispatch => ({
    handleEmailChange: event => dispatch(setEmail(event.target.value))
  })
)(Email)
