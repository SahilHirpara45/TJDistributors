import styled from 'styled-components'
import { CRow, CListGroup } from '@coreui/react'

export const DashboardWrapperStyled = styled.div`
  display: inline-block;
  width: 100%;

  .filter_card_wrapper {
    display: inline-block;
    width: 100%;
    margin-bottom: 30px;
  }

  .select_wrapper {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
`

export const CRowStyled = styled(CRow)`
  margin-bottom: 20px;
`

export const CListGroupStyled = styled(CListGroup)`
  border-top: none !important;
  border-bottom: none !important;

  .list-group-item {
    border: none;
    padding: 0px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .list-group-item span {
    font-weight: 400;
    font-size: 20px;
    color: #909090;
  }

  .avatar {
    height: 38px;
    width: 38px;
  }

  @media (max-width: 1599px) {
    .list-group-item span {
      font-size: 16px;
    }
  }

  @media (max-width: 1399px) {
    .avatar {
      height: 44px;
      width: 44px;
    }
  }
`
