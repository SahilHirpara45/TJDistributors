import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import performRequest from 'src/common/network'
import { SearchInput } from 'src/components/CommonInputs'
import SearchBarCard from 'src/components/SearchBarCard/SearchBarCard'
import TableComponent from 'src/components/TableComponent/TableComponent'
import Pagination from "react-responsive-pagination";
import { ManageInspectionWrapper } from "../ManageInspectionTypes/Styled";
import moment from 'moment';
import { toast } from "react-toastify";
import { GlobalVar } from 'src/common/globalVar'
import { Avatar } from '../ManageUser/ManageUser'
import { CAvatar } from '@coreui/react'

const Inspections = (props) => {
  const [dataList, _dataList] = useState([]);
  const { token } = useSelector((s) => s.user);
  const [offset, _offset] = useState(0)
  const [limit, _limit] = useState(10)
  const [total, _total] = useState(0)
  const { pathname } = useLocation();
  const [paginationData, _paginationData] = useState({
    totalPages: 0,
    page: 0,
    nextPage: 0,
  });
  const navigate = useNavigate()
  const params = useParams()
  console.log("pathname", pathname);
  const actionsHandler = () => {
    return (
      <>
        {/* <Link to="/addUser"> */}
        {/* <SecondaryButton onClick={() => setVisible(!visible)} text="Add Representative" /> */}
        {/* </Link> */}
        <SearchInput />
      </>
    )
  }

  useEffect(() => {
    getInspectionList()
  }, [pathname, props?.type, offset])


  const getInspectionList = async () => {
    try {
      let status = props?.type ? [props?.type] : pathname?.split('/') ||
        console.log()
      const response = await performRequest('inspection/inspectionlist?offset=' + offset + '&&limit=' + limit + '&&status=' + (status[status?.length - 1] == 'open' ? 'pending' : 'completed'), '', token, 'GET');
      if (response.body.status) {
        let EditedData = response?.body?.data?.docs?.map((item, index) => {
          let temp = item
          temp.date = moment(item?.createdAt).format('MM/DD/YYYY')
          temp.contactName = item?.contact ? item?.contact + '/' + phoneFormatter(item?.phone) : ''
          var current = moment().startOf('day');
          let diff = Math.round(moment.duration(moment(item?.createdAt).diff(current)).asDays())
          temp.pastDays = diff < 0 ? diff * -1 : diff;
          temp.action = <div style={{ display: 'flex', }}>
            <button style={{ color: '#005BCC', border: '1px solid #005BCC', marginRight: '10px' }} onClick={() => navigate('/inspections/show-inspection/' + item?._id)} >Show</button>
            <button style={{ color: '#E82225', border: '1px solid #E82225' }} onClick={() => statusChangeAction(item?._id, status[status?.length - 1] == 'open' ? 'pending' : 'completed')}> {status[status?.length - 1] == 'open' ? "Compete" : 'Pending'}</button>
          </div>
          temp.user = item?.createdBy?.profilepic ? (
            <div className="d-flex align-items-center">
              <Avatar>
                <CAvatar
                  width={32}
                  height={32}
                  className="user-img"
                  src={
                    GlobalVar.ProfileImageEndpoint + item?.createdBy?.profilepic ||
                    userImgs
                  }
                ></CAvatar>
              </Avatar>{" "}
              {item?.createdBy?.firstName}{" "}
            </div>
          ) : (
            <div className="d-flex align-items-center"><Avatar> <div className="user-img"><div className="avatar-img d-flex align-items-center justify-content-center" style={{ textTransform: "uppercase", fontSize: 14, border: "1px solid #E82225", color: "#E82225" }}>{item?.createdBy?.firstName.split(' ')[0].charAt(0)}{item?.createdBy?.firstName?.split('')?.length > 1 ? item?.createdBy?.firstName?.split(' ')[1]?.charAt(0) : ''}</div></div></Avatar> {item?.createdBy?.firstName} </div>
          )
          return temp
        })
        _dataList(EditedData)
        _total(response.body.data.totalDocs || 0);

        _paginationData({
          nextPage: response.body.data.nextPage,
          page: response.body.data.page,
          totalPages: response.body.data.totalPages,
        });
      }
      else {
        token && toast.error("something went worng. Try again")
      }
    }
    catch (e) {
      console.log(e)
      toast.error("something went worng. Try again");
    }
  }

  const statusChangeAction = async (id, status) => {
    const res = await performRequest("inspection/inspectionlist/" + id, { status: status == 'pending' ? 'completed' : 'pending' }, token, 'PUT')
    if (res.body.status) {
      getInspectionList()
    }
  }
  const phoneFormatter = (phoneNumberString) => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + " " + match[3];
    }
    return phoneNumberString;
  };
  const tableColumn = [
    {
      dataField: "serviceRequest",
      text: "#",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "customer",
      text: "Customer",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "contactName",
      text: "Contact",
      sort: true,
      align: "left",
      headerStyle: () => {
        return { width: "30%", align: "left" };
      },
    },
    {
      dataField: "date",
      text: "Create Date",
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
    },
    {
      dataField: "pastDays",
      text: "Days since started",
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
    },
    {
      dataField: "user",
      text: "Inspector",
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
    },

    {
      dataField: "action",
      text: "Action",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
  ];
  return (
    <>
      {!props?.type ?
        <>
          <SearchBarCard text="Inspections" actions={actionsHandler()}></SearchBarCard>
          <div style={{ height: '30px' }}></div>
        </>
        : <></>}
      <TableComponent tableColumn={tableColumn} tableData={dataList} />
      {!props?.type ?
        <ManageInspectionWrapper>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <p className="mb-0">
                {total} Inspections (showing {offset + 1}-
                {offset + limit < total ? offset + limit : total})
              </p>
            </div>
            <Pagination
              current={paginationData.page}
              total={paginationData.totalPages}
              onPageChange={(d) => {
                console.log(d);
                _offset((d - 1) * limit);
              }}
            />
          </div>
        </ManageInspectionWrapper>
        : <></>}
    </>
  )
}

export default Inspections
