import React from 'react'
import PropTypes from 'prop-types'

const UnprocessedReportsSvg = ({ height = '30', width = '24' }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1747 0H0.0734863V30H23.9267V7.75201L16.1747 0ZM19.9316 7.0674H16.8603V3.9959L19.9316 7.0674ZM2.41374 27.6597V2.34025H14.52V8.23753C14.52 8.88375 15.0438 9.40766 15.6901 9.40766H21.5865V27.6597H2.41374Z"
          fill="white"
        />
        <path d="M18.7094 23.2471H5.29102V24.8073H18.7094V23.2471Z" fill="white" />
        <path d="M13.2569 8.59668H5.29102V10.1568H13.2569V8.59668Z" fill="white" />
        <path
          d="M15.9168 13.5633H16.7814L13.4397 16.9049L10.8267 14.2919L5.05005 20.0691L6.15309 21.1724L10.8267 16.4985L13.4397 19.1113L17.8846 14.6663V15.5291H19.4448V12.0031H15.9168V13.5633Z"
          fill="white"
        />
        <path d="M13.2569 5.19272H5.29102V6.75289H13.2569V5.19272Z" fill="white" />
      </svg>
    </>
  )
}

UnprocessedReportsSvg.propTypes = {
  height: PropTypes.any,
  width: PropTypes.any,
}

export default UnprocessedReportsSvg
