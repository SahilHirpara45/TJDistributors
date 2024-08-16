import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CFormInput, CInputGroup, CFormSelect, CFormTextarea, CRow, CCol } from '@coreui/react'
import { useForm } from 'react-hook-form'
import SimpleCard from 'src/components/SimpleCard/SimpleCard'
import { SecondaryButton, PrimaryButton } from '../../components/Buttons/Buttons'
import performRequest from 'src/common/network'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const CFormInputStyled = styled(CFormInput)`
  border-color: #dadada;
  border-radius: 10px;
  height: 54px;
  font-size: 16px;
  color: #909090;
  width: 100% !important;

  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;

  @media (max-width: 1599px) {
    height: 46px;
    font-size: 14px;
  }
`

export const CFormSelectStyled = styled(CFormSelect)`
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #909090;
  font-size: 16px;
  height: 54px;

  width: 100% !important;

  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;

  &:focus {
    box-shadow: none;
    border-color: #dadada;
  }

  @media (max-width: 1599px) {
    height: 46px;
    font-size: 14px;
  }
`
export const CFormTextareaStyled = styled(CFormTextarea)`
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #909090;
  font-size: 16px;
  min-height: 200px !important;

  width: 100% !important;

  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;

  &:focus {
    box-shadow: none;
    border-color: #dadada;
  }

  @media (max-width: 1599px) {
    min-height: 150px !important;
    font-size: 14px;
  }
`

export const FormWrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 20px;

  .button_wrapper {
    display: flex;
    gap: 20px;
  }

  .error_color {
    color: #e55353;
    font-size: 14px;
  }

  @media (max-width: 575px) {
    .button_wrapper {
      gap: 15px;
    }
  }
`

export const InspectionTypesAddForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({})
  const { token } = useSelector(s => s.user)


  const location = useLocation()
  const navigate = useNavigate()


  const onSubmit = async (values, isEdit = false) => {
    console.log(isEdit)
    try {
      if (isEdit) {
        values._id = location?.state?._id
      }

      let responseData = await performRequest('admin/inspectiontype', values, token, isEdit ? 'PUT' : 'POST')
      if (responseData.body) {
        console.log("responseData.body", responseData.body.data);
        if (responseData.body.status) {
          toast.success("Inspection added successfully")
          reset()
          // history.back()
          navigate('/inspections/equipmentinfolist/' + responseData?.body?.data?._id, { state: responseData.body.data })
        }
        else {
          toast.error(responseData.body.message)
        }
      }
    }
    catch (e) {
      console.log("e", e.message)
    }
  }

  return (
    <>
      <SimpleCard text="Maintain Inspection Types">
        <CRow>
          <CCol xs={12} xl={6}>
            <FormWrapper>
              <form onSubmit={handleSubmit((v) => onSubmit(v, location?.state?._id ? true : false))} noValidate>
                <CInputGroup className="mb-4 flex-column">
                  <CFormInputStyled
                    type="text"
                    placeholder="Name"
                    defaultValue={location?.state?.name || ''}
                    {...register('name', {
                      required: 'Name is required',

                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-2 error_color">
                    {errors.name && errors.name.message}
                  </span>
                </CInputGroup>

                <CInputGroup className="mb-4 flex-column">
                  <CFormSelectStyled
                    aria-label="Default select example"
                    defaultValue={location?.state?.type || ''}
                    {...register('type', {
                      required: 'Unit is required',
                    })}
                  >
                    <option value="" disabled selected>
                      Bank Or Unit
                    </option>
                    <option value="Bank">Bank</option>
                    <option value="Unit">Unit</option>

                  </CFormSelectStyled>
                  <span className="d-flex mt-2 error_color">
                    {errors.type && errors.type.message}
                  </span>
                </CInputGroup>

                <CInputGroup className="mb-4 flex-column">
                  <CFormTextareaStyled
                    aria-label="With textarea"
                    placeholder="Products Information Fields"
                    defaultValue={location?.state?.productInfo?.join(',') || ''}
                    {...register('productInfo', {
                      required: 'Products Information is required',
                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-1 error_color">
                    {errors.productInfo && errors.productInfo.message}
                  </span>
                </CInputGroup>

                <div className="button_wrapper">
                  <PrimaryButton text="Save & Next" type="submit" />
                  <SecondaryButton text="Cancel" type="button" onClick={() =>
                    history.back()
                  } />
                </div>
              </form>
            </FormWrapper>
          </CCol>
          <CCol xs={12} xl={6} />
        </CRow>
      </SimpleCard>
    </>
  )
}
export const EquipmentInfo = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({})
  const { token } = useSelector(s => s.user)


  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  console.log("params", params);

  const onSubmit = async (values, isEdit = false) => {
    console.log("location?.state", location?.state?.data)
    try {
      if (isEdit)
        values._id = location?.state?._id
      let responseData = await performRequest('admin/equipment/' + params.id, values, token, isEdit ? 'PUT' : 'POST')
      if (responseData.body) {
        if (responseData.body.status) {
          toast.success("Equipment added successfully")
          reset()
          // history.back()
          navigate('/inspections/equipmentinfolist/' + params.id)
        }
        else {
          toast.error(responseData.body.message)
        }
      }
    }
    catch (e) {
      console.log("e", e.message)
    }
  }
  return (
    <>
      <SimpleCard text={`Maintain Equipment Info Item`}>
        <CRow>
          <CCol xs={12} xl={6}>
            <FormWrapper>
              <form
                onSubmit={handleSubmit((v) => onSubmit(v, location?.state?.eq_id ? true : false))} noValidate
              >
                <CInputGroup className="mb-4 flex-column">
                  <CFormInputStyled
                    type="text"
                    placeholder="Name"
                    defaultValue={location?.state?.name || ''}
                    {...register('name', {
                      required: 'Name is required',

                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-2 error_color">
                    {errors.name && errors.name.message}
                  </span>
                </CInputGroup>
                <CInputGroup className="mb-4 flex-column">
                  <CFormTextareaStyled
                    aria-label="With textarea"
                    placeholder="Products Information Fields"
                    defaultValue={location?.state?.description || ''}
                    {...register('description', {
                      required: 'Products Information is required',
                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-1 error_color">
                    {errors.productInfo && errors.productInfo.message}
                  </span>
                </CInputGroup>
                <CInputGroup className="mb-4 flex-column">
                  <CFormSelectStyled
                    aria-label="Default select example"
                    defaultValue={location?.state?.type || ''}
                    {...register('type', {
                      required: 'Type is required',
                    })}
                  >
                    <option value="" disabled selected>
                      Type
                    </option>
                    <option value="Text">Text</option>
                    <option value="Number">Number</option>
                    <option value="List">List</option>
                    <option value="Dollars">Formula(dollars)</option>
                    <option value="FeetInches">Formula(feet and inches)</option>
                    <option value="Integer">Formula(integer)</option>
                    <option value="TwoDecimal">Formula(two decimal places)</option>

                  </CFormSelectStyled>
                  <span className="d-flex mt-2 error_color">
                    {errors.type && errors.type.message}
                  </span>
                </CInputGroup>
                <CInputGroup className="mb-4 flex-column">
                  <CFormTextareaStyled
                    aria-label="With textarea"
                    placeholder="Option Information Fields"
                    defaultValue={location?.state?.options?.join(',') || ''}
                    {...register('options', {
                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-1 error_color">
                    {errors.productInfo && errors.productInfo.message}
                  </span>
                </CInputGroup>

                <div className="button_wrapper">
                  <PrimaryButton text="Save" type="submit" />
                  {/* <SecondaryButton text="Cancel" type="button" onClick={() => history.back()} /> */}
                  <SecondaryButton text="Cancel" type="button" onClick={() =>
                    history.back()
                  } />
                </div>
              </form>
            </FormWrapper>
          </CCol>
          <CCol xs={12} xl={6} />
        </CRow>
      </SimpleCard>
    </>
  )
}
export const InspectionLine = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({})
  const { token } = useSelector(s => s.user)


  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  console.log("params", params);

  const onSubmit = async (values, isEdit = false) => {
    console.log("location?.state", location?.state?.data)
    try {
      if (isEdit)
        values._id = location?.state?._id
      let responseData = await performRequest('admin/lineitems/' + params.id, values, token, isEdit ? 'PUT' : 'POST')
      if (responseData.body) {
        if (responseData.body.status) {
          toast.success("Equipment added successfully")
          reset()
          // history.back()
          navigate('/inspections/inspectionlinelist/' + params.id)
        }
        else {
          toast.error(responseData.body.message)
        }
      }
    }
    catch (e) {
      console.log("e", e.message)
    }
  }
  return (
    <>
      <SimpleCard text={`Maintain Inspection Line Items`}>
        <CRow>
          <CCol xs={12} xl={6}>
            <FormWrapper>
              <form
                onSubmit={handleSubmit((v) => onSubmit(v, location?.state?.eq_id ? true : false))} noValidate
              >
                <CInputGroup className="mb-4 flex-column">
                  <CFormInputStyled
                    type="text"
                    placeholder="Name"
                    defaultValue={location?.state?.name || ''}
                    {...register('name', {
                      required: 'Name is required',

                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-2 error_color">
                    {errors.name && errors.name.message}
                  </span>
                </CInputGroup>
                <CInputGroup className="mb-4 flex-column">
                  <CFormTextareaStyled
                    aria-label="With textarea"
                    placeholder="Description"
                    defaultValue={location?.state?.description || ''}
                    {...register('description', {
                      required: 'Description is required',
                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-1 error_color">
                    {errors.description && errors.description.message}
                  </span>
                </CInputGroup>
                <CInputGroup className="mb-4 flex-column">
                  <CFormTextareaStyled
                    aria-label="With textarea"
                    placeholder="Quick Text"
                    defaultValue={location?.state?.quickText || ''}
                    {...register('quickText', {
                      required: 'quickText is required',
                      minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                  />
                  <span className="d-flex mt-1 error_color">
                    {errors.quickText && errors.quickText.message}
                  </span>
                </CInputGroup>

                <div className="button_wrapper">
                  <PrimaryButton text="Save" type="submit" />
                  <SecondaryButton text="Cancel" type="button" onClick={() => history.back()} />
                </div>
              </form>
            </FormWrapper>
          </CCol>
          <CCol xs={12} xl={6} />
        </CRow>
      </SimpleCard>
    </>
  )
}
