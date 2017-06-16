import * as React from 'react'

export default ({ children, onClick }) => (
  <button className={'c-button'} onClick={onClick}>
    {children}
  </button>
)
