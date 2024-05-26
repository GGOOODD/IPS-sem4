import React from 'react'

import PropTypes from 'prop-types'

import './characteristic-category.css'

const CharacteristicCategory = (props) => {
  return (
    <div className="characteristic-category-container">
      <div className="characteristic-category-container1"></div>
      <span className="characteristic-category-text">{props.text}</span>
      <div className="characteristic-category-container2">{props.children}</div>
    </div>
  )
}

CharacteristicCategory.defaultProps = {
  text: 'Text',
}

CharacteristicCategory.propTypes = {
  text: PropTypes.string,
}

export default CharacteristicCategory
