import React, { useRef } from 'react'
import styled from 'styled-components'
import { CButton, CCol, CFormInput } from '@coreui/react'
import { FiSearch } from 'react-icons/fi'
import { SecondaryButton } from '../Buttons/Buttons'

export const SearchCommponentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 465px;
  min-height: 188px;
  background-color: #f7f7f7;
  border-radius: 10px;
  margin-top: 40px;
  padding: 20px;
  justify-content: center;

  .buttons_wrapper {
    display: flex;
    gap: 30px;
  }

  .search_bar_wrapper {
    display: flex;
    margin-bottom: 36px;
    gap: 20px;
  }

  .icon_wrapper {
    width: 54px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1599px) {
    .icon_wrapper {
      width: 46px;
      height: 46px;
    }
  }

  @media (max-width: 575px) {
    .buttons_wrapper {
      gap: 15px;
    }

    .icon_wrapper {
      width: 48px;
      height: 48px;
    }
  }
`
export const CFormInputStyled = styled(CFormInput)`
  border-color: #dadada;
  border-radius: 10px;
  height: 54px;
  font-size: 16px;
  color: #909090;
  font-weight: 300;

  &:focus {
    box-shadow: none;
    border-color: #dadada;
  }

  @media (max-width: 1599px) {
    height: 46px;
    font-size: 14px;
  }
`

export const ResetButtonStyled = styled(CButton)`
  background: #ffffff;
  box-shadow: 0px 6px 15px rgba(144, 144, 144, 0.15);
  border-radius: 10px;
  min-height: 50px;
  min-width: 110px;
  border: none;
  font-size: 16px;
  color: #909090;

  &:hover {
    background: #ffffff;
    box-shadow: 0px 6px 15px rgba(144, 144, 144, 0.15);
    color: #909090;
  }

  &:focus {
    background: #ffffff;
    box-shadow: none;
    color: #909090;
  }

  &:active {
    background: #ffffff;
    box-shadow: none;
    color: #909090;
  }

  @media (max-width: 1599px) {
    min-width: 100px;
    min-height: 44px;
  }

  @media (max-width: 575px) {
    min-width: 74px;
  }
`

const FilterCard = () => {
  const textInput = useRef(null)

  function handleClick() {
    textInput.current.focus()
  }

  return (
    <>
      <SearchCommponentWrapper>
        <div className="search_bar_wrapper">
          <CCol xs={8} md={10}>
            <CFormInputStyled type="text" placeholder="Search" ref={textInput} />
          </CCol>

          <CCol xs={4} md={2}>
            <div className="icon_wrapper" onClick={handleClick}>
              <FiSearch fontSize="16px" color="#909090" />
            </div>
          </CCol>
        </div>

        <div className="buttons_wrapper">
          <SecondaryButton text="Filter" />
          <ResetButtonStyled>Reset</ResetButtonStyled>
        </div>
      </SearchCommponentWrapper>
    </>
  )
}

export default FilterCard
