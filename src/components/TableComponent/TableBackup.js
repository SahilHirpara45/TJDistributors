// import React, { useState } from 'react'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
// import BootstrapTable from 'react-bootstrap-table-next'
// import { BootstrapTableWrapperStyled } from './Styled'

// import {
//   CBadge,
//   CButton,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CCollapse,
//   CDataTable,
//   CPagination,
//   CRow,
//   CSelect,
// } from '@coreui/react'

// const columns = [
//   {
//     dataField: 'id',
//     text: '#',
//     sort: true,
//   },
//   {
//     dataField: 'customer',
//     text: 'Customer',
//     sort: true,
//   },
//   {
//     dataField: 'contact',
//     text: 'Contact',
//     sort: true,
//   },
//   {
//     dataField: 'latest',
//     text: 'Latest',
//     sort: true,
//   },
//   {
//     dataField: 'inspections',
//     text: 'Inspections',
//     sort: true,
//   },
//   {
//     dataField: 'action',
//     text: 'Action',
//     sort: true,
//   },
// ]

// const products = [
//   {
//     id: 1,
//     customer: 'Mongtgomery Country Parks and Recreation',
//     contact: 'William Kaarid / (240)271-9012',
//     latest: '4/7/12',
//     inspections: '01',
//     action: 'Show Inspections',
//   },
//   {
//     id: 2,
//     customer: 'Slowplace Aena Upper Marlbo MD',
//     contact: 'Pennie Boytack / (757)881-5024',
//     latest: '5/18/22',
//     inspections: '103',
//     action: 'Show Inspections',
//   },
// ]

// const TableComponent = () => {
//   const [data, setData] = useState([])
//   const [page, setPage] = useState(1)
//   const [loading, setLoading] = useState(false)
//   const [pages, setPages] = useState(0)
//   const [itemsPerPage, setItemsPerPage] = useState(20)
//   const [columnFilterValue, setColumnFilterValue] = useState()
//   const [tableFilterValue, setTableFilterValue] = useState('')
//   const [sorterValue, setSorterValue] = useState()
//   const [details, setDetails] = useState([])

//   const fields = [
//     { key: 'user_type', label: 'role' },
//     'email',
//     { key: 'is_active', label: 'status' },
//     {
//       key: 'actions',
//       label: '',
//       _style: { width: '1%' },
//       filter: false,
//     },
//   ]

//   const getBadge = (status) => {
//     switch (status) {
//       case 1:
//         return 'success'
//       case 0:
//         return 'danger'
//       default:
//         return 'primary'
//     }
//   }

//   const toggleDetails = (index) => {
//     const position = details.indexOf(index)
//     let newDetails = details.slice()
//     if (position !== -1) {
//       newDetails.splice(position, 1)
//     } else {
//       newDetails = [...details, index]
//     }
//     setDetails(newDetails)
//   }

//   const roleFilter = (
//     <CSelect
//       custom
//       name="roleSelect"
//       id="roleSelect"
//       // onChange={(e) =>
//       //   setColumnFilterValue({
//       //     ...columnFilterValue,
//       //     ...(_.isEmpty(e.target.value) ? { user_type: undefined } : { user_type: e.target.value }),
//       //   })
//       // }
//     >
//       <option value="">Please select</option>
//       <option value="admin">Admin</option>
//       <option value="staff">Staff</option>
//     </CSelect>
//   )
//   const statusFilter = (
//     <CSelect
//       custom
//       name="statusSelect"
//       id="statusSelect"
//       // onChange={(e) =>
//       //   setColumnFilterValue({
//       //     ...columnFilterValue,
//       //     ...(_.isEmpty(e.target.value)
//       //       ? { is_active: undefined }
//       //       : { is_active: +e.target.value }),
//       //   })
//       // }
//     >
//       <option value="">Please select</option>
//       <option value={1}>Active</option>
//       <option value={0}>Inactive</option>
//     </CSelect>
//   )

//   return (
//     <BootstrapTableWrapperStyled>
//       {/* <BootstrapTable keyField="id" data={products} columns={columns} bootstrap4 bordered={false} /> */}

//       <CDataTable
//         items={data}
//         fields={fields}
//         loading={loading}
//         hover
//         cleaner
//         columnFilter={{ external: true }}
//         columnFilterValue={columnFilterValue}
//         onColumnFilterChange={setColumnFilterValue}
//         columnFilterSlot={{ user_type: roleFilter, is_active: statusFilter }}
//         tableFilter={{ external: true }}
//         tableFilterValue={tableFilterValue}
//         onTableFilterChange={setTableFilterValue}
//         sorter
//         sorterValue={sorterValue}
//         onSorterValueChange={setSorterValue}
//         itemsPerPageSelect={{ external: true }}
//         itemsPerPage={itemsPerPage}
//         onPaginationChange={setItemsPerPage}
//         scopedSlots={{
//           is_active: (item) => (
//             <td>
//               <CBadge
//               // color={getBadge(item.is_active)}
//               >
//                 {/* {item.is_active ? 'Active' : 'Inactive'} */}
//                 Active
//               </CBadge>
//             </td>
//           ),
//           actions: (item) => {
//             return (
//               <td className="py-2">
//                 <CButton
//                   color="primary"
//                   variant="outline"
//                   shape="square"
//                   size="sm"
//                   // onClick={() => {
//                   //   toggleDetails(item._id)
//                   // }}
//                 >
//                   {/* {details.includes(item._id) ? 'Hide' : 'Show'} */}
//                   hide
//                 </CButton>
//               </td>
//             )
//           },
//           details: (item) => {
//             return (
//               <CCollapse
//               // show={details.includes(item._id)}
//               >
//                 <CCardBody>
//                   <h4>uigiugbu</h4>
//                   {/* <p className="text-muted">User since: {moment(item.created_at).fromNow()}</p> */}
//                   <CButton
//                     size="sm"
//                     color="info"
//                     // onClick={() => onEditClickHandler(item._id)}
//                   >
//                     Edit
//                   </CButton>
//                   <CButton
//                     size="sm"
//                     color="danger"
//                     className="ml-1"
//                     // onClick={() => onDeleteClickHandler(item._id)}
//                   >
//                     Delete
//                   </CButton>
//                 </CCardBody>
//               </CCollapse>
//             )
//           },
//         }}
//       />
//     </BootstrapTableWrapperStyled>
//   )
// }

// export default TableComponent
