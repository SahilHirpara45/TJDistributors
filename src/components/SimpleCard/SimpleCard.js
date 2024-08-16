import React from 'react'
import { CCardStyled } from './Styled'
import PropTypes from 'prop-types'

const SimpleCard = ({ text, children }) => {
  return (
    <CCardStyled>
      {text && <h4 className="card_header">{text}</h4>}
      {children}
    </CCardStyled>
  )
}

SimpleCard.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
}

export default SimpleCard
