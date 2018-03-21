import React, { Fragment } from 'react'

import Username from './Username'
import UsernameForm from './UsernameForm'

import Email from './Email'
import EmailForm from './EmailForm'

export default () =>
  <Fragment>
    <Username />
    <UsernameForm />

    <Email />
    <EmailForm />
  </Fragment>
