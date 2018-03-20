import React, { Fragment } from 'react'

export default ({ username, handleUsernameChange }) =>
  <Fragment>
    <label htmlFor='username'>Change your username</label>
    <input id='username' type='text' value={username} onChange={handleUsernameChange} />
  </Fragment>
