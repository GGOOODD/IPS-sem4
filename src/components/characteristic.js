import React from 'react'

import PropTypes from 'prop-types'

import './characteristic.css'

const Characteristic = (props) => {
  const characteristicCategory = props.category;
  
  
  return (
    <div className={`characteristic-container ${props.rootClassName} `}>
      <span className="characteristic-text">{props.text}</span>
      <input type="checkbox" className="characteristic-checkbox" />
    </div>
  )
}

Characteristic.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

Characteristic.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Characteristic
