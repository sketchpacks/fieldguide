import * as React from 'react'

export default ({ children, onClick, className }) => {
  return (
    <button
      className={`c-button ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
