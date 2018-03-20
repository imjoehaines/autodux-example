import { connect } from 'react-redux'

import Username from './component'

export default connect(
  state => ({
    email: state.email
  })
)(Username)
