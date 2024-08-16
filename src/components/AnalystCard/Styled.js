import styled from 'styled-components'

export const CardWrapperStyled = styled.div`
  display: inline-block;
  width: 100%;
  /* min-height: 185px; */
  height: 185px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ bg }) => (bg ? bg : 'red')};
  border-radius: 20px;
  background-position-x: ${({ isBgArrow }) => isBgArrow && '20px'};

  @media (max-width: 1599px) {
    height: 150px;
  }

  @media (max-width: 1460px) {
    background-position-x: unset;
  }
`

export const CardContentWrapperStyled = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  padding: 0px 15px;

  h4 {
    /* font-weight: 500; */
    /* font-size: 20px; */
    font-weight: normal;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
    /* font-size: 38px; */
    font-size: 26px;
    color: #ffffff;
  }

  .icon_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 46px;
    border-radius: 30px;
    background: ${({ iconBg }) => iconBg};
    margin-bottom: 12px;
  }

  .icon_wrapper svg {
    height: ${({ iconResSize }) => (iconResSize ? iconResSize : '28px')};
  }

  @media (max-width: 1599px) {
  }

  @media (max-width: 1399.98px) {
    span {
      font-size: 22px;
    }
  }
`
