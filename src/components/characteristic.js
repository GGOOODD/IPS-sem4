import React from 'react'

import PropTypes from 'prop-types'

import './characteristic.css'

const Characteristic = (props) => {
  
  const handleChange = (event) => {
    if (event.target.checked == "true" || event.target.checked) props.changeCurrentFilter({characteristicCategory: props.characteristicCategory, value: props.name}, "add");
    else props.changeCurrentFilter({characteristicCategory: props.characteristicCategory, value: props.name}, "remove");
  }
  
  return (
    <div className={`characteristic-container ${props.rootClassName} `}>
      <span className="characteristic-text">{props.name}</span>
      <input onChange={handleChange.bind(this)} type="checkbox" className="characteristic-checkbox" />
    </div>
  )
}

Characteristic.defaultProps = {
  rootClassName: '',
  name: 'Text',
}

Characteristic.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
}

export default Characteristic
