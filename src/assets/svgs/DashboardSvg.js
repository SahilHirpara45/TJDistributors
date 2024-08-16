import React from 'react'
import PropTypes from 'prop-types'

const DashboardSvg = ({ color = '#F8BDBE', filter = 'none', width = '30', height = '30' }) => {
  return (
    <svg
      // width="30"
      // height="30"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={color}
      filter={filter}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_246_344)" filter="url(#filter0_d_246_344)">
        <path
          d="M11.4791 0H4.60411C3.71956 0 3 0.719559 3 1.60411V5.72911C3 6.61383 3.71956 7.33339 4.60411 7.33339H11.4791C12.3638 7.33339 13.0834 6.61383 13.0834 5.72911V1.60411C13.0834 0.719559 12.3638 0 11.4791 0Z"
          //   fill="#F8BDBE"
        />
        <path
          d="M11.4791 9.1666H4.60411C3.71956 9.1666 3 9.88615 3 10.7709V20.3959C3 21.2804 3.71956 22 4.60411 22H11.4791C12.3638 22 13.0834 21.2804 13.0834 20.3959V10.7709C13.0834 9.88615 12.3638 9.1666 11.4791 9.1666V9.1666Z"
          //   fill="#F8BDBE"
        />
        <path
          d="M23.3959 14.6666H16.5209C15.6362 14.6666 14.9166 15.3862 14.9166 16.2709V20.3959C14.9166 21.2805 15.6362 22 16.5209 22H23.3959C24.2805 22 25 21.2805 25 20.3959V16.2709C25 15.3862 24.2805 14.6666 23.3959 14.6666V14.6666Z"
          //   fill="#F8BDBE"
        />
        <path
          d="M23.3959 0H16.5209C15.6362 0 14.9166 0.719559 14.9166 1.60411V11.2291C14.9166 12.1138 15.6362 12.8334 16.5209 12.8334H23.3959C24.2805 12.8334 25 12.1138 25 11.2291V1.60411C25 0.719559 24.2805 0 23.3959 0V0Z"
          //   fill="#F8BDBE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_246_344"
          x="0"
          y="0"
          // width="30"
          // height="30"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_344" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_246_344"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_246_344">
          <rect
            width="22"
            height="22"
            //   fill="#F8BDBE"
            transform="translate(3)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

DashboardSvg.propTypes = {
  color: PropTypes.any,
  filter: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
}

export default DashboardSvg
