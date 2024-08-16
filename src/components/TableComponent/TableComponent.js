import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import { BootstrapTableWrapperStyled } from './Styled'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const TableComponent = (props) => {
  const columns = [
    {
      dataField: 'id',
      text: '#',
      sort: true,
    },
    {
      dataField: 'customer',
      text: 'Customer',
      sort: true,
    },
    {
      dataField: 'contact',
      text: 'Contact',
      sort: true,
    },
    {
      dataField: 'latest',
      text: 'Latest',
      sort: true,
    },
    {
      dataField: 'inspections',
      text: 'Inspections',
      sort: true,
    },
    {
      dataField: 'action',
      text: 'Action',
      sort: true,
    },
  ]

  const products = [
    {
      id: 1,
      customer: 'Mongtgomery Country Parks and Recreation',
      contact: 'William Kaarid / (240)271-9012',
      latest: '4/7/12',
      inspections: '01',
      action: 'Show Inspections',
    },
    {
      id: 2,
      customer: 'Slowplace Aena Upper Marlbo MD',
      contact: 'Pennie Boytack / (757)881-5024',
      latest: '5/18/22',
      inspections: '103',
      action: 'Show Inspections',
    },
  ]

  return (
    <BootstrapTableWrapperStyled>
      <BootstrapTable
        keyField="id"
        data={props?.tableData || products}
        columns={props?.tableColumn || columns}
        bootstrap4
        bordered={false}
        hover
        rowEvents={props?.rowEvent || {}}
      />
    </BootstrapTableWrapperStyled>
  )
}

export default TableComponent
