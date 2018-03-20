import { connect } from 'react-redux'

import EmailForm from './component'
import { setEmail, getEmail } from '../ducks'

export default connect(
  state => ({
    email: getEmail(state)
  }),
  dispatch => ({
    handleEmailChange: event => dispatch(setEmail(event.target.value))
  })
)(EmailForm)
