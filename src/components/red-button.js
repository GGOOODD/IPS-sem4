import React from 'react'

import PropTypes from 'prop-types'

import './red-button.css'

const RedButton = (props) => {
  return (
    <div className={`red-button-container ${props.rootClassName} `}>
      <button id="incart" type="button" className="red-button-button button">
        <span className="red-button-text">{props.text}</span>
      </button>
    </div>
  )
}

RedButton.defaultProps = {
  text: 'text',
  rootClassName: '',
}

RedButton.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RedButton
