import React from 'react'

import PropTypes from 'prop-types'

import './my-input.css'

const MyInput = (props) => {
  return (
    <div className={`my-input-container ${props.rootClassName} `}>
      <span className="my-input-text">{props.text}</span>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="my-input-textinput input"
      />
    </div>
  )
}

MyInput.defaultProps = {
  rootClassName: '',
  textinputPlaceholder: 'placeholder',
  text: 'Text',
}

MyInput.propTypes = {
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text: PropTypes.string,
}

export default MyInput
