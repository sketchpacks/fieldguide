import PropTypes from 'prop-types'
import React from 'react'

import "../../scss/main.scss"

const Button = ({ children, onClick }) => (
  <button className="c-button" onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
