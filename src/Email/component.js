import React from 'react'

export default ({ email }) =>
  <p>
    We will contact you every 5 minutes at <a href={`mailto:${email}`}>{email}</a>
  </p>
