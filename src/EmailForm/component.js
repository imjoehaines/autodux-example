import React, { Fragment } from 'react'

export default ({ email, handleEmailChange }) =>
  <Fragment>
    <label htmlFor='email'>Change your email</label>
    <input id='email' type='email' value={email} onChange={handleEmailChange} />
  </Fragment>
