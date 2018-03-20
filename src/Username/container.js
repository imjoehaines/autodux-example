import { connect } from 'react-redux'

import Username from './component'

export default connect(
  state => ({
    username: state.username
  })
)(Username)
