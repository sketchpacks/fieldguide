import * as React from 'react'
import classNames from 'classnames'

export default ({ children, onClick, className }) => {
  return (
    <div
      className={ classNames('c-stickynav', className) }
    >

      { children }

    </div>
  )
}
