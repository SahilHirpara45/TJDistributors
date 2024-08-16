import React from 'react'
import { CRow, CCol } from '@coreui/react'
import { CCardStyled, SearchBarWrapper } from './Styled'
import PropTypes from 'prop-types'

const SearchBarCard = ({ text, children, actions }) => {
  return (
    <CCardStyled>
      <CRow>
        <CCol xs={12} xl={6}>
          <h4 className="card_header">{text}</h4>
        </CCol>
        <CCol xs={12} xl={6}>
          <SearchBarWrapper>{actions && actions}</SearchBarWrapper>
        </CCol>
      </CRow>
      {children}
    </CCardStyled>
  )
}

SearchBarCard.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
}

export default SearchBarCard
