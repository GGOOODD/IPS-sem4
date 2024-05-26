import React from 'react'

import PropTypes from 'prop-types'

import './big-type.css'

const BigType = (props) => {
  return (
    <div className={`big-type-container ${props.rootClassName} `}>
      <button type="button" className="big-type-button button" style={{ cursor: "pointer" }}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="big-type-image"
        />
        <span className="big-type-text">{props.text}</span>
      </button>
    </div>
  )
}

BigType.defaultProps = {
  rootClassName: '',
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Button',
}

BigType.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
}

export default BigType
