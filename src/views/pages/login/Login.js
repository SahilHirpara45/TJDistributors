import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CButton, CCol, CContainer, CInputGroup, CRow, CImage } from '@coreui/react'
import { useForm } from 'react-hook-form'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import {
  CCardStyled,
  CCardGroupStyled,
  LogoWrapperStyled,
  LoginTextStyled,
  LoginDescriptionStyled,
  CFormCheckStyled,
  CFormInputStyled,
  CCardBodyStyled,
  CInputGroupTextStyled,
  CFormPasswordInputStyled,
  CInputGroupPasswordStyled,
  CButtonForgotPasswordStyled,
  ForgotPasswordButtonWrapperStyled,
  LoginButtonWrapperStyled,
  CopyWriteTextStyled,
  FormWrapper,
  LoginWrapper,
} from './Styled'
import tjdistributorsLogo from '../../../assets/brand/tjdistributorsLogo.png'
import { useDispatch } from 'react-redux'
import { DoLogin } from '../../../store/reducers/user.reducer'

const Login = () => {
  const navigate = useNavigate()

  const [showTextPassword, setShowTextPassword] = useState(false)
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({})

  const onSubmit = (values) => {
    console.log(values)
    reset()
    dispatch(DoLogin(values))
    // navigate('/dashboard')
  }

  return (
    <LoginWrapper className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroupStyled>
              <CCardStyled>
                <CCardBodyStyled>
                  <LogoWrapperStyled>
                    <CImage src={tjdistributorsLogo} alt="tjdistributorsLogo" />
                  </LogoWrapperStyled>

                  <FormWrapper>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <LoginTextStyled>Log In</LoginTextStyled>
                      <LoginDescriptionStyled className="text-medium-emphasis">
                        Enter your email address and password below to login
                      </LoginDescriptionStyled>

                      <CInputGroup className="mb-3 flex-column">
                        <CFormInputStyled
                          id="floatingInput"
                          floatingLabel="Email"
                          type="email"
                          placeholder="Email"
                          autoComplete="Email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                              message: 'Please enter valid email',
                            },
                          })}
                        />
                        <span className="d-flex mt-2 error_color">
                          {errors.email && errors.email.message}
                        </span>
                      </CInputGroup>

                      <div className="mb-3 d-flex flex-column floating-password-input">
                        <CInputGroupPasswordStyled>
                          <CFormPasswordInputStyled
                            id="floatingInput"
                            floatingLabel="Password"
                            type={showTextPassword ? 'text' : 'password'}
                            placeholder="Password"
                            {...register('password', {
                              required: 'Password is required',
                              maxLength: {
                                value: 13,
                                message: 'Maximum length should be 13',
                              },
                              pattern: {
                                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                message:
                                  'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
                              },
                            })}
                          />
                          <CInputGroupTextStyled>
                            {showTextPassword ? (
                              <BsEye
                                color="#909090"
                                onClick={() => setShowTextPassword(!showTextPassword)}
                                cursor="pointer"
                              />
                            ) : (
                              <BsEyeSlash
                                color="#909090"
                                onClick={() => setShowTextPassword(!showTextPassword)}
                                cursor="pointer"
                              />
                            )}
                          </CInputGroupTextStyled>
                        </CInputGroupPasswordStyled>

                        <span className="d-flex mt-1 error_color">
                          {errors.password && errors.password.message}
                        </span>
                      </div>

                      <CRow>
                        <CCol xs={12} sm={6}>
                          <CInputGroup className="mb-3 flex">
                            <CFormCheckStyled id="flexCheckDefault" label="Remember Me" />
                          </CInputGroup>
                        </CCol>
                        <CCol xs={12} sm={6} className="text-right">
                          <ForgotPasswordButtonWrapperStyled>
                            <CButtonForgotPasswordStyled color="link">
                              Forgot password?
                            </CButtonForgotPasswordStyled>
                          </ForgotPasswordButtonWrapperStyled>
                        </CCol>
                      </CRow>

                      <LoginButtonWrapperStyled>
                        <CButton type="submit">Login</CButton>
                      </LoginButtonWrapperStyled>
                    </form>
                  </FormWrapper>
                </CCardBodyStyled>
              </CCardStyled>
            </CCardGroupStyled>
          </CCol>
        </CRow>
      </CContainer>
      <CopyWriteTextStyled>© 2022 TJ Distributors -All Rights Reserved.</CopyWriteTextStyled>
    </LoginWrapper>
  )
}

export default Login
