import React from 'react'

import PropTypes from 'prop-types'

import './base-button.css'

const BaseButton = (props) => {
  return (
    <div className={`base-button-container ${props.rootClassName} `}>
      <button type="button" className="base-button-button button" style={{ cursor: "pointer" }}>
        <span className="base-button-text">{props.text}</span>
      </button>
    </div>
  )
}

BaseButton.defaultProps = {
  text: 'Button',
  rootClassName: '',
}

BaseButton.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BaseButton
