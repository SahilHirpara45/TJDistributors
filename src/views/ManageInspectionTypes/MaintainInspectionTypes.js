import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CModal, CModalFooter, CModalHeader, CModalTitle, CPagination, CPaginationItem } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import performRequest from 'src/common/network'
import { SecondaryButton, PrimaryButton } from 'src/components/Buttons/Buttons'
import SearchBarCard from 'src/components/SearchBarCard/SearchBarCard'
import TableComponent from 'src/components/TableComponent/TableComponent'
import { ManageInspectionWrapper } from './Styled'
import Pagination from 'react-responsive-pagination';
// import { AddButtonWrapper } from './Styled'

const actionsHandler = () => {
  return (
    <Link to="/inspections/add">
      <SecondaryButton text="Add" />
    </Link>
  )
}

const equipmentActions = (props) => {
  console.log("propspasa", props);
  return (
    <>
      <Link to={`/inspections/equipmentinfo/${props}`}>
        <SecondaryButton text="Add" />
      </Link>
      <Link to={"/inspections/inspectionlinelist/" + props} >
        <PrimaryButton text="Done" />
      </Link>
    </>
  )
}

const lineItemstActions = (props) => {
  console.log("propspasa", props);
  return (
    <>
      <Link to={`/inspections/inspectionline/${props}`}>
        <SecondaryButton text="Add" />
      </Link>
      <Link to="/inspections/types" >
        <PrimaryButton text="Done" />
      </Link>
    </>
  )
}

export const MaintainInspectionTypes = () => {
  const [dataList, _dataList] = useState([])
  const [offset, _offset] = useState(0)
  const [limit, _limit] = useState(5)
  const [total, _total] = useState(0)
  const [visible, setVisible] = useState(false)
  const [paginationData, _paginationData] = useState({ totalPages: 0, page: 0, nextPage: 0 })
  const { token } = useSelector(s => s.user)

  const navigate = useNavigate()
  const params = useParams()
  useEffect(() => {
    getInspectionType()
    console.log(params.type)
  }, [offset])

  const getInspectionType = async () => {
    try {
      const response = await performRequest(`inspection?offset=${offset}&&limit=${limit}`, '', token, 'GET')
      console.log('responseinspect', response)
      if (response.body) {
        _total(response.body.data.totalDocs || 0)
        _paginationData({ nextPage: response.body.data.nextPage, page: response.body.data.page, totalPages: response.body.data.totalPages })
        if (response.body.data.docs.length) {
          let newDataForTable = response.body.data?.docs.map((item, index) => {
            let lineItems = item.lineItems.map(prod => {
              return (prod.name)
            })
            let equimentinfo = item.equimentinfo.map(prod => {
              return (prod.name)
            })
            console.log('lineItems', lineItems)
            return { ...item, productInfo: item.productInfo.join(','), lineItems: lineItems.join(','), equimentinfo: equimentinfo.join(','), action: <GetActionButton onClick={(type) => onClickToggle(type, item)} /> }
          })
          console.log('newDataForTable', newDataForTable)
          _dataList(newDataForTable)
        }
      }
    } catch (e) {
      console.log(e)
      token && toast.error('something went worng. Try again');
    }
  }
  const onClickToggle = (type, item) => {

    switch (type) {
      case 'edit': navigate('/inspections/add', { state: item })
        break;
      case 'Remove': setVisible(item._id)
        break;
      case 'Copy': {
        let data = { ...item }
        delete data._id
        navigate('/inspections/add', { state: data })
      }
        break;
      case 'editEquipment': navigate('/inspections/equipmentinfolist/' + item._id)
        break;
      case 'editLineItems': navigate('/inspections/inspectionlinelist/' + item._id)
        break;
      default:
        break;
    }
  }
  const deleteInspectionType = async (_id) => {
    try {
      let res = await performRequest('admin/inspectiontype', { id: _id }, token, 'DELETE')
      console.log(res.body)
      setVisible();
      if (res.body.status) { toast.success("Deleted Successfully"); getInspectionType() }
      else
        toast.error("Something went wrong! Try again.")
    }
    catch (e) {
      console.log('Error', e)
    }

  }
  const GetActionButton = ({ onClick }) => {
    return (
      <CDropdown>
        <CDropdownToggle color="secondary" style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, color: 'white' }} caret={false}>...</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => onClick('edit')} style={{cursor: 'pointer'}}>Edit</CDropdownItem>
          <CDropdownItem onClick={() => onClick('Remove')} style={{cursor: 'pointer'}}>Remove</CDropdownItem>
          <CDropdownItem onClick={() => onClick('Copy')} style={{cursor: 'pointer'}}>Copy</CDropdownItem>
          <CDropdownItem onClick={() => onClick('editEquipment')} style={{cursor: 'pointer'}}>Edit Equipment Info</CDropdownItem>
          <CDropdownItem onClick={() => onClick('editLineItems')} style={{cursor: 'pointer'}}>Edit Line Items</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
  }
  const tableColumn = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      }
    },
    {
      dataField: 'type',
      text: 'Bank/Unit',
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      }
    },
    {
      dataField: 'productInfo',
      text: 'Product Information Fields',
      sort: true,
    },
    {
      dataField: 'equimentinfo',
      text: 'Equipment Info',
      sort: true,
    },
    {
      dataField: 'lineItems',
      text: 'Line Items',
      sort: true,
    },

    {
      dataField: 'action',
      text: 'Action',
      sort: true,
      headerStyle: () => {
        return { width: "8%" };
      }
    },
  ]


  return (
    <>
      <SearchBarCard text="Maintain Inspection Types" actions={actionsHandler()}></SearchBarCard>
      <div className="'table-responsive'" style={{ marginTop: 30 }}>
        <TableComponent tableColumn={tableColumn} tableData={dataList} />
      </div>
      <ManageInspectionWrapper>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className='d-flex align-items-center'>
            <p className='mb-0'>{total} Inspections (showing {offset + 1}-{offset + limit < total ? offset + limit : total})</p>
          </div>
          <Pagination
            current={paginationData.page}
            total={paginationData.totalPages}
            onPageChange={(d) => { console.log(d); _offset((d - 1) * limit) }}
          />
        </div>
      </ManageInspectionWrapper>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Are you sure?</CModalTitle>
        </CModalHeader>

        <CModalFooter>
          <CButton color="secondary" style={{ color: 'white' }} onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" style={{ color: 'white' }} onClick={() => { deleteInspectionType(visible) }}>Remove</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export const MaintainEquipementInfo = () => {
  const [dataList, _dataList] = useState([])
  const [offset, _offset] = useState(0)
  const [limit, _limit] = useState(5)
  const [total, _total] = useState(0)
  const [visible, setVisible] = useState(false)
  const [paginationData, _paginationData] = useState({ totalPages: 0, page: 0, nextPage: 0 })
  const { token } = useSelector(s => s.user)
  const [name, setName] = useState()

  const navigate = useNavigate()
  const params = useParams()
  console.log("params", params)
  useEffect(() => {
    getEquipmentInfo()
    console.log("params", params)
  }, [offset])

  const getEquipmentInfo = async () => {
    try {
      const response = await performRequest(`inspection/${params.id}`, '', token, 'GET')
      console.log('equipmentresponse', response.body.data[0].equimentinfo)

      if (response.body) {
        if (response.body.data.length) {
          setName(response.body.data[0].name)

          let newDataForTable = response?.body?.data[0].equimentinfo
          let data = newDataForTable.map(i => {
            let description = i.type == 'List' ? i.options.join(',') || i.description : i.description
            return { ...i, description: description, action: <GetActionButton onClick={(d) => onClickToggle(d, i)} /> }

          })
          console.log('newDataForTable', newDataForTable)
          _dataList(data)
        }
      }
    } catch (e) {
      console.log(e)
      toast.error('something went worng. Try again');
    }
  }
  const onClickToggle = (type, item) => {

    switch (type) {
      case 'edit': navigate('/inspections/equipmentinfo/' + params.id, { state: { ...item, eq_id: item._id } })
        break;
      case 'Remove': setVisible(item._id)
        break;
      case 'Copy': {
        let data = { ...item }
        delete data._id
        navigate('/inspections/equipmentinfo/' + params.id, { state: data })
      }
      default:
        break;
    }
  }

  const GetActionButton = ({ onClick }) => {
    return (
      <CDropdown>
        <CDropdownToggle color="secondary" style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, color: 'white' }} caret={false}>...</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => onClick('edit')} style={{cursor: 'pointer'}}>Edit</CDropdownItem>
          <CDropdownItem onClick={() => onClick('Remove')} style={{cursor: 'pointer'}}>Remove</CDropdownItem>
          <CDropdownItem onClick={() => onClick('Copy')} style={{cursor: 'pointer'}}>Copy</CDropdownItem>
          {/* <CDropdownItem onClick={() => onClick('editEquipment')}>Edit Equipment Info</CDropdownItem>
          <CDropdownItem onClick={() => onClick('editLineItems')}>Edit Line Items</CDropdownItem> */}
        </CDropdownMenu>
      </CDropdown>
    )
  }

  const deleteEquipment = async (_id) => {
    try {
      let res = await performRequest('admin/equipment/' + params.id, { id: _id }, token, 'DELETE')
      console.log(res.body)
      setVisible(false);
      if (res.body.status) { toast.success("Deleted Successfully"); getEquipmentInfo() }
      else
        toast.error("Something went wrong! Try again.")
    }
    catch (e) {
      console.log('Error', e)
    }
  }
  const tableColumn = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'description',
      text: 'Descrption Info',
      sort: true,
    },
    {
      dataField: 'type',
      text: 'Type',
      sort: true,
    },
    {
      dataField: 'action',
      text: 'Action',
      sort: true,
    },
  ]
  return (
    <>
      <SearchBarCard text={`Maintain ${name}  Form Equipment Info List`} actions={equipmentActions(params.id)}></SearchBarCard>
      <div className="'table-responsive'" style={{ marginTop: 30 }}>
        <TableComponent tableColumn={tableColumn} tableData={dataList} />
      </div>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Are you sure?</CModalTitle>
        </CModalHeader>

        <CModalFooter>
          <CButton color="secondary" style={{ color: 'white' }} onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" style={{ color: 'white' }} onClick={() => { deleteEquipment(visible) }}>Remove</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export const MaintainLineItems = () => {
  const [dataList, _dataList] = useState([])
  const [offset, _offset] = useState(0)
  const [limit, _limit] = useState(5)
  const [total, _total] = useState(0)
  const [visible, setVisible] = useState(false)
  const [paginationData, _paginationData] = useState({ totalPages: 0, page: 0, nextPage: 0 })
  const { token } = useSelector(s => s.user)
  const [name, setName] = useState()

  const navigate = useNavigate()
  const params = useParams()
  console.log("params", params)
  useEffect(() => {
    getEquipmentInfo()
    console.log("params", params)
  }, [offset])

  const getEquipmentInfo = async () => {
    try {
      const response = await performRequest(`inspection/${params.id}`, '', token, 'GET')
      console.log('equipmentresponse', response.body.data[0].lineItems)

      if (response.body) {
        if (response.body.data.length) {
          setName(response.body.data[0].name)

          let newDataForTable = response?.body?.data[0].lineItems
          let data = newDataForTable.map(i => {
            return { ...i, action: <GetActionButton onClick={(d) => onClickToggle(d, i)} /> }

          })
          console.log('newDataForTable', newDataForTable)
          _dataList(data)
        }
      }
    } catch (e) {
      console.log(e)
      toast.error('something went worng. Try again');
    }
  }
  const onClickToggle = (type, item) => {

    switch (type) {
      case 'edit': navigate('/inspections/inspectionline/' + params.id, { state: { ...item, eq_id: item._id } })
        break;
      case 'Remove': setVisible(item._id)
        break;
      case 'Copy': {
        navigate('/inspections/inspectionline/' + params.id, { state: item })
      }
      default:
        break;
    }
  }

  const GetActionButton = ({ onClick }) => {
    return (
      <CDropdown>
        <CDropdownToggle color="secondary" style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, color: 'white' }} caret={false}>...</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => onClick('edit')} style={{cursor: 'pointer'}}>Edit</CDropdownItem>
          <CDropdownItem onClick={() => onClick('Remove')} style={{cursor: 'pointer'}}>Remove</CDropdownItem>
          <CDropdownItem onClick={() => onClick('Copy')} style={{cursor: 'pointer'}}>Copy</CDropdownItem>
          {/* <CDropdownItem onClick={() => onClick('editEquipment')}>Edit Equipment Info</CDropdownItem>
          <CDropdownItem onClick={() => onClick('editLineItems')}>Edit Line Items</CDropdownItem> */}
        </CDropdownMenu>
      </CDropdown>
    )
  }

  const deleteLineItem = async (_id) => {
    try {
      let res = await performRequest('admin/lineitems/' + params.id, { id: _id }, token, 'DELETE')
      console.log(res.body)
      setVisible(false);
      if (res.body.status) { toast.success("Deleted Successfully"); getEquipmentInfo() }
      else
        toast.error("Something went wrong! Try again.")
    }
    catch (e) {
      console.log('Error', e)
    }
  }
  const tableColumn = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'description',
      text: 'Descrption Info',
      sort: true,
    },
    {
      dataField: 'quickText',
      text: 'Quick Text',
      sort: true,
    },
    {
      dataField: 'action',
      text: 'Action',
      sort: true,
    },
  ]
  return (
    <>
      <SearchBarCard text={`Maintain ${name}  Inspection Line Items`} actions={lineItemstActions(params.id)}></SearchBarCard>
      <div className="'table-responsive'" style={{ marginTop: 30 }}>
        <TableComponent tableColumn={tableColumn} tableData={dataList} />
      </div>

      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Are you sure?</CModalTitle>
        </CModalHeader>

        <CModalFooter>
          <CButton color="secondary" style={{ color: 'white' }} onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" style={{ color: 'white' }} onClick={() => { deleteLineItem(visible) }}>Remove</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
