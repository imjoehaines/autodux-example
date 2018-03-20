import { connect } from 'react-redux'

import Username from './component'
import { getUsername } from '../ducks'

export default connect(
  state => ({
    username: getUsername(state)
  })
)(Username)
