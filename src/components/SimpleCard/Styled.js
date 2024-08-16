import styled from 'styled-components'
import { CCard } from '@coreui/react'

export const CCardStyled = styled(CCard)`
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 15px;
  width: ${({ width }) => (width ? width : '100%')};

  .card_header {
    font-weight: 700;
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
