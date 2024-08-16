import React from 'react'
import { CCol, CRow, CListGroupItem, CAvatar } from '@coreui/react'
import { CListGroupStyled, CRowStyled, DashboardWrapperStyled } from './Styled'
import AnalystCard from '../../components/AnalystCard/AnalystCard'
import {
  OpenInspectionsSvg,
  UnprocessedReportsSvg,
  ArchivedReportsSvg,
  CompletedInspectionsSvg,
} from '../../assets/svgs'
import SimpleCard from 'src/components/SimpleCard/SimpleCard'
import Avatar1 from '../../assets/images/avatars/1.jpg'
import Avatar2 from '../../assets/images/avatars/2.jpg'
import Avatar3 from '../../assets/images/avatars/3.jpg'
import Avatar4 from '../../assets/images/avatars/4.jpg'
import { SimpleSelect } from 'src/components/CommonInputs'
import TableComponent from 'src/components/TableComponent/TableComponent'
import Inspections from '../Inspections/Inspections'

const AnalystCardData = [
  {
    imgUrl: '/images/OpenInspectionsBg.png',
    bg: '#5451D9',
    isBgArrow: false,
    icon: <OpenInspectionsSvg />,
    iconBg: '#7674e1',
    text: 'Open Inspections',
    number: '15',
    iconResSize: '18px',
  },
  {
    imgUrl: '/images/CompletedInspectionsBg.png',
    bg: '#FF8A01',
    isBgArrow: false,
    icon: <CompletedInspectionsSvg />,
    iconBg: '#f8ad56',
    text: 'Completed Inspections',
    number: '509',
    iconResSize: '26px',
  },
  {
    imgUrl: '/images/UnprocessedReportsBg.png',
    bg: '#B80071',
    isBgArrow: true,
    icon: <UnprocessedReportsSvg />,
    iconBg: '#c6338d',
    text: 'Unprocessed Reports',
    number: '25',
    iconResSize: '22px',
  },
  {
    imgUrl: '/images/ArchivedReportsBg.png',
    bg: '#83D031',
    isBgArrow: false,
    icon: <ArchivedReportsSvg />,
    iconBg: '#99d953',
    text: 'Archived Reports',
    number: '10',
    iconResSize: '22px',
  },
]

const AvatarDetails = [
  {
    name: 'John Doe - 20',
    image: Avatar1,
  },
  {
    name: 'Dave Mark - 18',
    image: Avatar2,
  },
  {
    name: 'Cole Burger - 15',
    image: Avatar3,
  },
  {
    name: 'Steve Dye - 10',
    image: Avatar4,
  },
]

const yearSelect = [
  {
    name: '2020',
    value: '2020',
  },
  {
    name: '2021',
    value: '2021',
  },
  {
    name: '2022',
    value: '2022',
  },
  {
    name: '2023',
    value: '2023',
  },
  {
    name: '2024',
    value: '2024',
  },
]

const monthSelect = [
  {
    name: 'jan',
    value: 'jan',
  },
  {
    name: 'feb',
    value: 'feb',
  },
  {
    name: 'mar',
    value: 'mar',
  },
  {
    name: 'apr',
    value: 'apr',
  },
  {
    name: 'may',
    value: 'may',
  },
]

const weekSelect = [
  {
    name: '1',
    value: '1',
  },
  {
    name: '2',
    value: '2',
  },
  {
    name: '3',
    value: '3',
  },
  {
    name: '4',
    value: '4',
  },
  {
    name: '5',
    value: '5',
  },
]

const tableColumn = [
  {
    dataField: "id",
    text: "Inspection #",
    sort: true,
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "customer",
    text: "Customer",
    sort: true,
    align: "left",
    headerStyle: () => {
      return { width: "35%", align: "left" };
    },
  },
  {
    dataField: "CreateDate",
    text: "Create Date",
    sort: true,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
  {
    dataField: "DaysSinceStarted",
    text: "Days Since Started",
    sort: true,
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "Inspector",
    text: "Inspector",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "action",
    text: "Action",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
];
const dataList = [
  {
    id: 1,
    customer: 'Mongtgomery Country Parks and Recreation',
    CreateDate: '4/7/12',
    DaysSinceStarted: '01',
    Inspector: "John Doe -20",
    action: 'Show Inspections',
  },
  {
    id: 2,
    customer: 'Mongtgomery Country Parks and Recreation',
    CreateDate: '4/7/12',
    DaysSinceStarted: '01',
    Inspector: "John Doe -20",
    action: 'Show Inspections',
  },
  {
    id: 3,
    customer: 'Mongtgomery Country Parks and Recreation',
    CreateDate: '4/7/12',
    DaysSinceStarted: '01',
    Inspector: "John Doe -20",
    action: 'Show Inspections',
  },
  {
    id: 4,
    customer: 'Mongtgomery Country Parks and Recreation',
    CreateDate: '4/7/12',
    DaysSinceStarted: '01',
    Inspector: "John Doe -20",
    action: 'Show Inspections',
  },
]

const NewDashboard = () => {
  return (
    <DashboardWrapperStyled>
      <div className="filter_card_wrapper">
        <SimpleCard>
          <div className="select_wrapper">
            <SimpleSelect options={yearSelect} width="265px" />
            <SimpleSelect options={monthSelect} width="265px" />
            <SimpleSelect options={weekSelect} width="265px" />
          </div>
        </SimpleCard>
      </div>

      <CRowStyled className="gy-4">
        {AnalystCardData.length > 0 &&
          AnalystCardData.map((item, index) => (
            <CCol key={index} xs={12} sm={6} lg={4} xl={3}>
              <AnalystCard
                imgUrl={item?.imgUrl}
                bg={item?.bg}
                isBgArrow={item?.isBgArrow}
                icon={item?.icon}
                iconBg={item?.iconBg}
                text={item?.text}
                number={item?.number}
                iconResSize={item?.iconResSize}
              />
            </CCol>
          ))}
      </CRowStyled>

      <CRow className="gy-4">
        <CCol xs={12} sm={6} md={12} lg={6}>
          <SimpleCard text="Completed Inspections">
            <CListGroupStyled>
              {AvatarDetails.length > 0 &&
                AvatarDetails.map((item, index) => (
                  <CListGroupItem key={index}>
                    <CAvatar src={item?.image} />
                    <span>{item?.name}</span>
                  </CListGroupItem>
                ))}
            </CListGroupStyled>
          </SimpleCard>
        </CCol>
        <CCol>
          <SimpleCard text="Processed Reports">
            <CListGroupStyled>
              {AvatarDetails.length > 0 &&
                AvatarDetails.slice(0, 2).map((item, index) => (
                  <CListGroupItem key={index}>
                    <CAvatar src={item?.image} />
                    <span>{item?.name}</span>
                  </CListGroupItem>
                ))}
            </CListGroupStyled>
          </SimpleCard>
        </CCol>
      </CRow>
      <div style={{ marginTop: '15px', marginBottom: '30px' }}>
        <SimpleCard text="Open Inspections" >
          <Inspections type='open'></Inspections>
        </SimpleCard>
      </div>

    </DashboardWrapperStyled>
  )
}

export default NewDashboard
