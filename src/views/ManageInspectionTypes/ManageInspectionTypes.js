import React from 'react'
import SimpleCard from 'src/components/SimpleCard/SimpleCard'
import { ManageInspectionWrapper, InfoCardWrapper } from './Styled'
import { CCol, CRow } from '@coreui/react'
import { Link } from 'react-router-dom'
import InfoCard from 'src/components/InfoCard/InfoCard'

const ManageInspectionTypes = () => {
  return (
    <>
      <SimpleCard>
        <CRow className="gx-4">
          <CCol xs={12} lg={8}>
            <InfoCardWrapper>
              <CRow className="gy-4">
                <CCol xs={12} lg={6}>
                  <Link to="/inspections/types" className="text_link">
                    <InfoCard text="Maintain Inspection Types" cursor="pointer"></InfoCard>
                  </Link>
                </CCol>
                <CCol xs={12} lg={6}>
                  <Link to="/inspections/report" className="text_link">
                    <InfoCard text="Inspection Report" cursor="pointer"></InfoCard>
                  </Link>
                </CCol>
                <CCol xs={12} lg={6}>
                  <InfoCard text="Manage Customers" cursor="pointer"></InfoCard>
                </CCol>
                <CCol xs={12} lg={6}>
                  <Link to="/users" className="text_link">
                    <InfoCard text="Manage Users" cursor="pointer"></InfoCard>
                  </Link>
                </CCol>
              </CRow>
            </InfoCardWrapper>

            {/* <ManageInspectionWrapper>
              <Link to="/inspections/report" className="text_link">
                <h4 className="inspections_text">Inspections Report</h4>
              </Link>

              <CRow>
                <CCol xs={12} xxl={8}>
                  <Link to="/inspections/types" className="text_link">
                    <h3 className="maintain_text">Maintain Organizations</h3>
                  </Link>
                </CCol>
                <CCol xs={12} xxl={4} />
              </CRow>

              <Link to="/inspections/list" className="text_link">
                <h4 className="completed_text">Completed Inspections # Report by Month</h4>
              </Link>

              <Link to="/inspections/seating" className="text_link">
                <h4 className="customers_text">Customers</h4>
              </Link>
            </ManageInspectionWrapper> */}
          </CCol>
          <CCol xs={12} lg={4}></CCol>
        </CRow>
      </SimpleCard>
    </>
  )
}

export default ManageInspectionTypes
