import React from 'react'
import styled from 'styled-components'
import { CInputGroup, CFormInput, CInputGroupText, CButton } from '@coreui/react'
import { FiSearch } from 'react-icons/fi'

export const CInputGroupPasswordStyled = styled(CInputGroup)`
  border: 1px solid #dadada;
  border-radius: 10px;
  max-width: 351px;
  height: 100%;
`

export const CFormPasswordInputStyled = styled(CFormInput)`
  font-size: 14px;
  font-weight: 300;
  color: #909090;
  border: none;
  border-radius: 10px;
  height: 50px;

  @media (max-width: 1599px) {
    height: 46px;
  }
`

export const CInputGroupTextStyled = styled(CButton)`
  background-color: white;
  border: none;
  border-radius: 10px;
  height: 50px;
  cursor:pointer;

  @media (max-width: 1599px) {
    height: 46px;
  }
`

const SearchInput = ({ onChange, onSubmit }) => {
  return (
    <>
      <CInputGroupPasswordStyled>
        <CFormPasswordInputStyled type="text" placeholder="Search..." onChange={onChange} />
        <CInputGroupTextStyled onClick={() => onSubmit()} style={{ backgroundColor: '#909090', color: '#fff' }}>
          <FiSearch color="#fff" />
        </CInputGroupTextStyled>
      </CInputGroupPasswordStyled>
    </>
  )
}

export default SearchInput
