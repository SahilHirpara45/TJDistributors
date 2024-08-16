import React from 'react'
import styled from 'styled-components'
import { CInputGroup, CFormSelect } from '@coreui/react'
import PropTypes from 'prop-types'

export const CInputGroupStyled = styled(CInputGroup)`
  max-width: ${({ width }) => (width ? width : '100%')};

  @media (max-width: 848px) {
    max-width: 100%;
  }
`

export const CFormSelectStyled = styled(CFormSelect)`
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #909090;
  font-size: 16px;
  height: 54px;

  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;

  &:focus {
    box-shadow: none;
    border-color: #dadada;
  }

  @media (max-width: 1599px) {
    height: 46px;
    font-size: 14px;
  }
`

const SimpleSelect = ({ placeHolder, options, width }) => {
  return (
    <>
      <CInputGroupStyled width={width}>
        <CFormSelectStyled aria-label="Default select example" width={width}>
          {placeHolder && <option>Bank Or Unit</option>}

          {options &&
            options.map((item, index) => (
              <option key={index} value={item?.value}>
                {item?.name}
              </option>
            ))}
        </CFormSelectStyled>
      </CInputGroupStyled>
    </>
  )
}

SimpleSelect.propTypes = {
  placeHolder: PropTypes.string,
  width: PropTypes.string,
  options: PropTypes.array,
}

export default SimpleSelect
