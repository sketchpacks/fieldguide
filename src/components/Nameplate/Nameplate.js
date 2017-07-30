import * as React from 'react'
import Avatar from 'components/Avatar'

export default ({ url, onClick, className, name }) => {
  return (
    <strong
      className={`c-nameplate ${className || ''}`}
      onClick={onClick}
    >
      <Avatar url={url} size={'20'} className={'u-mr-xsmall'} /> { name }
    </strong>
  )
}
