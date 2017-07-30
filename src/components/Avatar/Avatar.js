import * as React from 'react'

export default ({ url, onClick, className, size }) => {
  return (
    <img
      className={`c-avatar ${className || ''}`}
      onClick={onClick}
      src={url}
      width={size}
      height={size}
    />
  )
}
