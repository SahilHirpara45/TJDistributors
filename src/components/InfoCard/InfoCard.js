import React from 'react'
import styled from 'styled-components'
import { CCard } from '@coreui/react'
import PropTypes from 'prop-types'

export const CCardStyled = styled(CCard)`
  padding: 15px;
  width: ${({ width }) => (width ? width : '100%')};
  background: #f7f7f7;
  border: 1px solid #dadada;
  border-radius: 20px;
  min-height: 250px;
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};

  .card_header {
    font-weight: 500;
    font-size: 21px;
    color: #e82225;
    padding-bottom: 14px;
    margin-bottom: 18px;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      background: #e82225;
      height: 3px;
      width: 90px;
    }
  }

  @media (max-width: 1399.98px) {
    .card_header {
      &::after {
        width: 70px;
      }
    }
  }

  @media (max-width: 1199px) {
    .card_header {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    .card_header {
      font-size: 16px;
    }
  }
`

const InfoCard = ({ text, children, cursor }) => {
  return (
    <>
      <CCardStyled cursor={cursor}>
        {text && <h4 className="card_header">{text}</h4>}
        {children}
      </CCardStyled>
    </>
  )
}

InfoCard.propTypes = {
  text: PropTypes.string,
  cursor: PropTypes.string,
  children: PropTypes.any,
}

export default InfoCard
