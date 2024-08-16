import React from 'react'
import PropTypes from 'prop-types'

const UsersSvg = ({ color = '#F8BDBE', filter = 'none', width = '19', height = '25' }) => {
  return (
    <>
      <svg
        // width="19"
        // height="25"
        width={width}
        height={height}
        viewBox="0 0 19 25"
        // fill="none"
        fill={color}
        filter={filter}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.58889"
          cy="6.85658"
          r="5.928"
          // fill="#F8BDBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.714355 21.2595C1.00142 17.7706 4.86511 15.0076 9.58925 15.0076C14.3135 15.0076 18.1773 17.7707 18.4642 21.2597C16.1065 23.3626 12.9972 24.6406 9.5894 24.6406C6.18147 24.6406 3.07206 23.3625 0.714355 21.2595Z"
          //   fill="#F8BDBE"
        />
      </svg>
    </>
  )
}

UsersSvg.propTypes = {
  color: PropTypes.any,
  filter: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
}

export default UsersSvg
