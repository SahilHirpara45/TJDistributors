import React from 'react'
import PropTypes from 'prop-types'

const ReportsSvg = ({ color = '#F8BDBE', filter = 'none', width = '20', height = '24' }) => {
  return (
    <>
      <svg
        // width="20"
        // height="24"
        width={width}
        height={height}
        viewBox="0 0 20 24"
        // fill="none"
        fill={color}
        filter={filter}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3397 0H0.45874V24H19.5413V6.2016L13.3397 0ZM16.3452 5.65392H13.8882V3.19672L16.3452 5.65392ZM2.33094 22.1278V1.8722H12.016V6.59002C12.016 7.107 12.435 7.52612 12.9521 7.52612H17.6691V22.1278H2.33094Z"
          //   fill="#F8BDBE"
        />
        <path
          d="M15.3675 18.5977H4.63281V19.8458H15.3675V18.5977Z"
          // fill="#F8BDBE"
        />
        <path
          d="M11.0055 6.87735H4.63281V8.12548H11.0055V6.87735Z"
          // fill="#F8BDBE"
        />
        <path
          d="M13.1333 10.8507H13.825L11.1517 13.5239L9.06128 11.4335L4.43994 16.0553L5.32237 16.9379L9.06128 13.1988L11.1517 15.289L14.7076 11.7331V12.4233H15.9557V9.60252H13.1333V10.8507Z"
          //   fill="#F8BDBE"
        />
        <path
          d="M11.0055 4.15416H4.63281V5.40229H11.0055V4.15416Z"
          // fill="#F8BDBE"
        />
      </svg>
    </>
  )
}

ReportsSvg.propTypes = {
  color: PropTypes.any,
  filter: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
}

export default ReportsSvg
