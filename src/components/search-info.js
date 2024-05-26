import React from 'react'

import PropTypes from 'prop-types'

import './search-info.css'

const SearchInfo = (props) => {
  return (
    <div className="search-info-container">
      <span className="search-info-text">{props.searchInfo}</span>
      <div className="search-info-container1">
        <span id="quantity" className="search-info-text1">
          {props.amount}
        </span>
      </div>
    </div>
  )
}

SearchInfo.defaultProps = {
  searchInfo: 'searchInfo',
  amount: '0',
}

SearchInfo.propTypes = {
  searchInfo: PropTypes.string,
  amount: PropTypes.string,
}

export default SearchInfo
