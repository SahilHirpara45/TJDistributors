import React from 'react'
import { CFormInput, CInputGroup } from '@coreui/react'
import styled from 'styled-components'

export const CFormInputStyled = styled(CFormInput)`
  border-color: #dadada;
  border-radius: 10px;
  height: 54px;
  font-size: 16px;
  color: #909090;
  width: 100% !important;

  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;

  @media (max-width: 1599px) {
    height: 46px;
    font-size: 14px;
  }
`

const SimpleInput = () => {
  return (
    <>
      <CInputGroup className="mb-4">
        <CFormInputStyled type="text" placeholder="Name" />
      </CInputGroup>
    </>
  )
}

export default SimpleInput
