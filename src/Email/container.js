import { connect } from 'react-redux'

import Email from './component'
import { getEmail } from '../ducks'

export default connect(
  state => ({
    email: getEmail(state)
  })
)(Email)
