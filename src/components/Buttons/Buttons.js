import React from 'react'
import { CButton } from '@coreui/react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HoverButtonStyled = styled(CButton)`
  background: #f7f7f7;
  border: 1px solid #909090;
  border-radius: 10px;
  color: #909090;
  min-height: 40px;
  font-size: 14px;

  &:hover {
    background: #e82225;
    border: 1px solid #e82225;
  }

  &:focus {
    background: #e82225;
    border: 1px solid #e82225;
    box-shadow: none;
  }

  &:active {
    background: #e82225;
    border: 1px solid #e82225;
    box-shadow: none;
  }
`

const SecondaryButtonStyled = styled(CButton)`
  background: #909090;
  box-shadow: 0px 6px 15px rgba(144, 144, 144, 0.15);
  border: none;
  min-height: 50px;
  /* min-width: 134px; */
  min-width: 110px;
  font-size: 15px;
  border-radius: 10px;

  &:hover {
    background: #909090;
  }

  &:focus {
    background: #909090;
    box-shadow: none;
  }

  &:active {
    background: #909090;
    box-shadow: none;
  }

  @media (max-width: 1599px) {
    min-width: 100px;
    min-height: 44px;
  }

  @media (max-width: 575px) {
    min-width: 74px;
  }
`

const PrimaryButtonStyled = styled(CButton)`
  background: #e82225;
  box-shadow: 0px 6px 15px rgba(232, 34, 37, 0.15);
  border: none;
  min-height: 50px;
  /* min-width: 134px; */
  min-width: 110px;
  font-size: 15px;
  border-radius: 10px;
  color: white;

  &:hover {
    background: #e82225;
  }

  &:focus {
    background: #e82225;
    box-shadow: none;
  }

  &:active {
    background: #e82225;
    box-shadow: none;
  }

  @media (max-width: 1599px) {
    min-width: 100px;
    min-height: 44px;
  }

  @media (max-width: 575px) {
    min-width: 74px;
  }
`

export const HoverButton = ({ text }) => {
  return (
    <>
      <HoverButtonStyled>{text}</HoverButtonStyled>
    </>
  )
}

export const SecondaryButton = ({ text, type, ...rest }) => {
  return (
    <>
      <SecondaryButtonStyled type={type} {...rest}>{text}</SecondaryButtonStyled>
    </>
  )
}

export const PrimaryButton = ({ text, type }) => {
  return (
    <>
      <PrimaryButtonStyled type={type}>{text}</PrimaryButtonStyled>
    </>
  )
}

HoverButton.propTypes = {
  text: PropTypes.string,
}

SecondaryButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

PrimaryButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}
