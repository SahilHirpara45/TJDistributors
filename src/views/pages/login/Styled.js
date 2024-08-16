import styled from 'styled-components'
import {
  CCard,
  CCardGroup,
  CFormCheck,
  CFormInput,
  CCardBody,
  CInputGroupText,
  CInputGroup,
  CButton,
} from '@coreui/react'

export const LoginWrapper = styled.div`
  background: rgba(243, 245, 255, 0.7);
  backdrop-filter: blur(260px);
`

export const CCardStyled = styled(CCard)`
  flex: 0 1 auto;
  width: 100%;
  max-width: 500px;
  min-height: 454px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.08);
`

export const CCardBodyStyled = styled(CCardBody)`
  padding: 2.1rem 0;
`

export const CCardGroupStyled = styled(CCardGroup)`
  justify-content: center;

  .error_color {
    color: #e55353;
    font-size: 14px;
  }
`

export const LogoWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;

  img {
    height: auto;
  }

  @media (max-width: 1599px) {
    img {
      height: 49px;
    }
  }

  @media (max-width: 575px) {
    img {
      height: 42px;
    }
  }
`

export const FormWrapper = styled.div`
  display: inline-block;
  padding: 0 65px;
`

export const LoginTextStyled = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #e82225;
  margin-bottom: 15px;

  @media (max-width: 1199px) {
    font-size: 20px;
  }
`

export const LoginDescriptionStyled = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #909090;
  margin-bottom: 30px;

  @media (max-width: 1199px) {
    font-size: 14px;
  }
`

export const CFormCheckStyled = styled(CFormCheck)`
  font-size: 14px;
  font-weight: 400;
  color: #909090;

  .form-check-input:checked {
    background-color: #e82225;
    border-color: #e82225;
  }

  .form-check-input:focus {
    box-shadow: none;
  }
`

export const LoginButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  .Link {
    text-decoration: none;
  }

  .btn {
    background-color: #e82225;
    box-shadow: 0px 6px 15px rgb(232 34 37 / 15%);
    border-radius: 10px;
    border: none;
    min-height: 46px;
    padding: 0 50px;
    font-size: 14px;
  }
`

export const CFormInputStyled = styled(CFormInput)`
  border-color: #dadada;
  border-radius: 10px;
  height: 44px;
  font-size: 14px;
  font-weight: 300;
  color: #909090;

  width: 100% !important;

  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;
`

export const CFormPasswordInputStyled = styled(CFormInput)`
  height: 44px;
  font-size: 14px;
  font-weight: 300;
  color: #909090;
  border: none;
  border-radius: 10px;
`

export const CInputGroupTextStyled = styled(CInputGroupText)`
  background-color: white;
  border: none;
  border-radius: 10px;
`

export const CInputGroupPasswordStyled = styled(CInputGroup)`
  border: 1px solid #dadada;
  border-radius: 10px;
`

export const CButtonForgotPasswordStyled = styled(CButton)`
  font-weight: 400;
  font-size: 14px;
  color: #909090;
  padding: 0px;

  :hover {
    color: #909090;
  }
`

export const ForgotPasswordButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 575px) {
    justify-content: flex-start;
    margin-bottom: 20px;
  }
`
export const CopyWriteTextStyled = styled.p`
  /* position: absolute;
  bottom: 30px; */
  position: fixed;
  bottom: 20px;
  margin-bottom: 0px;
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  color: #262627;

  @media (max-width: 575px) {
    font-size: 14px;
  }
`
