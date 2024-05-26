import React from 'react'

import PropTypes from 'prop-types'

import './type.css'

const Type = (props) => {
  return (
    <div className={`type-container ${props.rootClassName} `}>
      <button type="button" className="type-button button" style={{ cursor: "pointer" }}>
        <img alt={props.imageAlt} src={props.imageSrc} className="type-image" />
        <span className="type-text">{props.text}</span>
      </button>
    </div>
  )
}

Type.defaultProps = {
  button: 'Button',
  rootClassName: '',
  imageAlt: 'image',
  text: 'Button',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Type.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Type
