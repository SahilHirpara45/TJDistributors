import React from 'react'
import { CardContentWrapperStyled, CardWrapperStyled } from './Styled'
import PropTypes from 'prop-types'

const AnalystCard = ({ imgUrl, bg, isBgArrow, icon, iconBg, text, number, iconResSize }) => {
  return (
    <CardWrapperStyled imgUrl={imgUrl} bg={bg} isBgArrow={isBgArrow}>
      <CardContentWrapperStyled iconBg={iconBg} iconResSize={iconResSize}>
        <div className="icon_wrapper">{icon}</div>
        <h4>{text}</h4>
        <span>{number}</span>
      </CardContentWrapperStyled>
    </CardWrapperStyled>
  )
}

AnalystCard.propTypes = {
  imgUrl: PropTypes.any,
  bg: PropTypes.any,
  isBgArrow: PropTypes.any,
  icon: PropTypes.any,
  iconBg: PropTypes.any,
  text: PropTypes.string,
  number: PropTypes.string,
  iconResSize: PropTypes.any,
}
export default AnalystCard
