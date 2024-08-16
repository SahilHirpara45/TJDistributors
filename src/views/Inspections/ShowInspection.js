import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import performRequest from 'src/common/network';
import TableComponent from 'src/components/TableComponent/TableComponent'
import { GlobalVar } from "src/common/globalVar";
import { CAvatar } from '@coreui/react';
import styledComponents from 'styled-components';
import SimpleCard from 'src/components/SimpleCard/SimpleCard';
import { PrimaryButton, SecondaryButton } from 'src/components/Buttons/Buttons';


const Avatar = styledComponents.div`
  .user-img {
    margin: 5px;
    width: 100px;
    height: 100px;
  }
  .user-img .avatar-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius:unset;
  }
`;
const ShowInspection = () => {
    const [dataList, _dataList] = useState([]);
    const [inspectionPlace, _inspectionPlace] = useState([]);
    const [inspectionPart, _inspectionPart] = useState([]);
    const [inspectionResponse, _inspectionResponse] = useState({});
    const [selectedInspection, _selectedInspection] = useState({})
    const [selectedInsectionId, _selectedInsectionId] = useState()
    const [getID, _getID] = useState()
    const [locationName, _locationName] = useState()
    const [tableColumn, _tableColumn] = useState([]);
    const { token } = useSelector((s) => s.user);
    const params = useParams();

    useEffect(() => {
        if (getID)
            dataConfig()
        else {
            console.log("No Get ID")
            _inspectionPart([])
        }
    }, [getID, locationName])

    useEffect(() => {
        ShowInspectionlist()
    }, [])
    useEffect(() => {
        if (inspectionResponse) {
            if (!getID) {
                console.log('setting', inspectionResponse?.body?.data?.docs?.[0]?.lineItemsData[0]?.equimentinfo)
                _getID(inspectionResponse?.body?.data?.docs?.[0]?.lineItemsData[0]?.equimentinfo)

            }
            else
                dataConfig()
        }
    }, [inspectionResponse])

    useEffect(() => {
        if (selectedInspection) {
            _selectedInsectionId(0);
            console.log("selectedInspection", selectedInspection)
        }
    }, [selectedInspection])

    const onRowClickeq = {
        onClick: (e, row, rowIndex) => {
            console.log("rowIndex", row)
            _getID(row?._id)
            console.log("rowIndex", row?.location)
            _locationName(row?.location)

        }
    }
    const ShowInspectionlist = async () => {
        try {
            const response = await performRequest('inspection/inspectionlist/' + params?.id, '', token, 'GET');
            console.log("showinspeciton", response)
            _inspectionResponse(response)
        }
        catch (e) {
            console.log(e)
            toast.error("something went worng. Try again");
        }
    }

    const dataConfig = () => {
        let response = inspectionResponse
        if (response?.body?.data) {
            const showinspection = response?.body?.data?.docs?.[0]?.equimentinfoData[0]?.data?.map((item, index) => {
                let temp = {
                    dataField: item?.name,
                    text: item?.name,
                    sort: true,
                }
                return temp;
            })
            console.log("logg", showinspection);
            _tableColumn([{
                dataField: "location",
                text: 'Location',
                sort: true,
            }, ...showinspection])

            const valueinspection = response?.body?.data?.docs?.[0]?.equimentinfoData?.map((item, index) => {
                let temp = { location: item?.location, _id: item?._id }
                item?.data?.map((item, index) => {
                    temp[item.name] = item?.value
                    return temp;
                })
                return temp
            })
            _dataList(valueinspection)

            const FilteredLineItems = response?.body?.data?.docs?.[0]?.lineItemsData?.filter(s => s.equimentinfo == getID)[0]

            _selectedInspection(FilteredLineItems)

            if (FilteredLineItems != -1) {
                const place = FilteredLineItems?.lineItems?.map((item, index) => {

                    const imageList =
                        <div className="d-flex align-items-center flex-wrap">
                            {item?.images?.map((imageItem, index) => {
                                return (
                                    <Avatar >
                                        <CAvatar
                                            width={100}
                                            height={100}
                                            className="user-img"
                                            style={{ borderRadius: 'none' }}
                                            src={
                                                GlobalVar.inspectionImageEndpoint + imageItem
                                            }
                                        ></CAvatar>
                                    </Avatar>)
                            })}
                        </div>
                    let temp = { ...item, photo: imageList }
                    return temp;
                })
                _inspectionPlace(place)

            }
            else {
                _inspectionPlace([])
            }





        }
    }
    console.log("selectedInspection?.lineItems", selectedInspection);

    const tableData = [
        {
            dataField: "name",
            text: "Name",
            sort: true,
            headerStyle: () => {
                return { width: "15%" };
            },
        },
        {
            dataField: "TaskStaus",
            text: "Status",
            sort: true,
            headerStyle: () => {
                return { width: "15%" };
            },
        },
        {
            dataField: "notes",
            text: "Notes",
            sort: true,
            align: "left",
            headerStyle: () => {
                return { width: "30%", align: "left" };
            },
        },
        {
            dataField: "photo",
            text: "Photo",
            sort: true,
            align: "left",
            headerStyle: () => {
                return { width: "30%", align: "left" };
            },
        },
    ];
    const tableParts = [
        {
            dataField: "qty",
            text: "Quantity",
            sort: true,
            headerStyle: () => {
                return { width: "15%" };
            },
        },
        {
            dataField: "parts",
            text: "Parts",
            sort: true,
            headerStyle: () => {
                return { width: "15%" };
            },
        }
    ];
    const onRowClickIn = {
        onClick: (e, row, rowIndex) => {
            console.log("Inspection Row", row, rowIndex)
            _selectedInsectionId(rowIndex)
        }
    }

    return (
        <div>
            <div style={{ marginBottom: 20 }}>{
                tableColumn?.length ?
                    <SimpleCard text="Bank" >
                        <TableComponent tableColumn={tableColumn} tableData={dataList} rowEvent={onRowClickeq} />
                    </SimpleCard>
                    : <></>
            }
            </div>
            <div style={{ marginBottom: 20 }}>
                <SimpleCard text={`${locationName || inspectionResponse?.body?.data?.docs?.[0]?.equimentinfoData?.[0]?.location} inspection`} >
                    <TableComponent tableColumn={tableData} tableData={inspectionPlace} rowEvent={onRowClickIn} />
                </SimpleCard>
            </div>
            <SimpleCard text="Parts Needed"  >
                {selectedInspection?.lineItems != undefined ?
                    < TableComponent tableColumn={tableParts} tableData={selectedInspection?.lineItems[selectedInsectionId]?.equiment?.filter(s => s.qty != '')} />
                    : <></>
                }
            </SimpleCard>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: 50, marginBottom: 25 }}>
                <div className='d-flex align-items-center justify-content-between'>
                    <div style={{ marginRight: 15 }}>
                        <PrimaryButton text="Download Report" />
                    </div>
                    <div style={{ marginRight: 15 }}>
                        <SecondaryButton text="Download Certificate of Inspection" type="submit" />
                    </div>
                    <div style={{ marginRight: 15 }}>
                        <SecondaryButton text="Email" type="submit" />
                    </div>
                    <SecondaryButton text="Done" type="submit" />
                </div>
                <div className='d-flex'>
                    <div style={{ marginRight: 15 }}>
                        <SecondaryButton text="Completed All Related" type="submit" />
                    </div>
                    <SecondaryButton text="Complete" type="submit" />
                </div>
            </div>
        </div>
    )
}
export default ShowInspection;