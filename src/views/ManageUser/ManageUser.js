import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CAvatar,
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { PrimaryButton, SecondaryButton } from "src/components/Buttons/Buttons";
import { SearchInput } from "src/components/CommonInputs";
import SearchBarCard from "src/components/SearchBarCard/SearchBarCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import performRequest, { performRequestFormData } from "src/common/network";
import TableComponent from "src/components/TableComponent/TableComponent";
import { ManageInspectionWrapper } from "../ManageInspectionTypes/Styled";
import Pagination from "react-responsive-pagination";
import userImgs from "src/assets/images/user.jpg";
import { GlobalVar } from "src/common/globalVar";

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
`;
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
`;

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
`;
export const Avatar = styled.div`
  .user-img {
    margin-right: 10px;
  }
  .user-img .avatar-img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50px;
  }
`;
export const bannerImg = styled.div`
  .photo-img-model {
  }
  .user-img .avatar-img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50px;
  }
`;

const ManageUser = () => {
  const [visible, setVisible] = useState(false);
  const [dataList, _dataList] = useState([]);

  const [edituser, _edituser] = useState({});
  const [offset, _offset] = useState(0);
  const [limit, _limit] = useState(10);
  const [total, _total] = useState(0);
  const [searchData, _searchData] = useState('')
  const [paginationData, _paginationData] = useState({
    totalPages: 0,
    page: 0,
    nextPage: 0,
  });
  const { token } = useSelector((s) => s.user);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("datalist>>>>", dataList);
  console.log("total>>>>>>", total);
  useEffect(() => {
    if (edituser._id) {
      console.log(edituser);
      setVisible(true);
    }
  }, [edituser]);

  useEffect(() => {
    if (!visible) _edituser({});
  }, [visible]);
  useEffect(() => {
    UserList();
  }, [visible]);

  useEffect(() => {
    UserList()
  }, [offset])

  // const searchHandler = (event) => {
  //   const searchitem = dataList.filter((item) =>
  //     item.firstName.props.children[2].includes(event.value)
  //   );
  //   _dataList(searchitem);
  // };

  const actionsHandler = (event) => {
    return (
      <>

        <SecondaryButton
          onClick={() => setVisible(!visible)}
          text="Add Representative"
        />

        <SearchInput
          onChange={(e) => {
            _searchData(e.target.value);
          }}
          onSubmit={() => (!offset ? UserList() : _offset(0))}
        />
      </>
    );
  };
  const deleteuser = async (id) => {
    try {
      let res = await performRequest("admin/user/" + id, {}, token, "DELETE");
      if (res.body.status) {
        toast.success("Deleled successfully");
        UserList();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const UserList = async () => {
    console.log(token);
    try {
      let url =
        searchData != ""
          ? `admin/users?offset=${offset}&&limit=${limit}&&search=${searchData}`
          : `admin/users?offset=${offset}&&limit=${limit}`;
      const response = await performRequest(url, "", token, "GET");
      console.log("responseuser", response.body);
      if (response.body) {
        _total(response.body.data.totalDocs || 0);
        _paginationData({
          nextPage: response.body.data.nextPage,
          page: response.body.data.page,
          totalPages: response.body.data.totalPages,
        });
        if (response.body.data.docs.length) {
          let newUserList = response.body.data.docs.map((item) => {
            console.log("newUseritem", item);
            return {
              ...item,
              status: item?.status ? "Active" : "Inactive",
              action: <GetActionButton items={item} />,
              firstName: item.profilepic ? (
                <div className="d-flex align-items-center">
                  <Avatar>
                    <CAvatar
                      width={32}
                      height={32}
                      className="user-img"
                      src={
                        GlobalVar.ProfileImageEndpoint + item.profilepic ||
                        userImgs
                      }
                    ></CAvatar>
                  </Avatar>{" "}
                  {item?.firstName}{" "}
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <Avatar>
                    {" "}
                    <div className="user-img">
                      <div
                        className="avatar-img d-flex align-items-center justify-content-center"
                        style={{
                          textTransform: "uppercase",
                          fontSize: 14,
                          border: "1px solid #E82225",
                          color: "#E82225",
                        }}
                      >
                        {item?.firstName.split(" ")[0].charAt(0)}
                        {item?.firstName?.split("")?.length > 1
                          ? item?.firstName?.split(" ")[1]?.charAt(0)
                          : ""}
                      </div>
                    </div>
                  </Avatar>{" "}
                  {item?.firstName}{" "}
                </div>
              ),
            };
          });
          console.log("newUserList", newUserList);
          _dataList(newUserList);
        } else {
          _dataList([]);
        }
      }
    } catch (e) {
      token && toast.error("something went worng. Try again");
    }
  };
  const GetActionButton = ({ items }) => {
    return (
      <CDropdown>
        <CDropdownToggle
          color="secondary"
          style={{
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            color: "white",
          }}
          caret={false}
        >
          ...
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem
            onClick={() => {
              console.log(items);
              _edituser(items);
            }}
            style={{cursor: 'pointer'}}
          >
            Edit
          </CDropdownItem>
          <CDropdownItem onClick={() => deleteuser(items._id)} style={{cursor: 'pointer'}}>
            Remove
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  };

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
      dataField: "firstName",
      text: "User Name",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      align: "left",
      headerStyle: () => {
        return { width: "35%", align: "left" };
      },
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
      formatter: phoneFormatter,
    },
    {
      dataField: "role",
      text: "Role",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "status",
      text: "Status",
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
  const FormModal = memo(({ edit }) => {
    const [editData, _editData] = useState({});
    const [imageUpload, _imageUpload] = useState();
    const [imagename, _imagename] = useState("");

    useEffect(() => {
      console.log("edit", edit);
      _editData(edit);
    }, [edit]);
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
      reset,
    } = useForm({
      defaultValues: {
        firstName: edit?.firstName || "",
        email: edit?.email || "",
        phone: edit?.phone || "",
        role: edit?.role || "",
        isActive: edit?.status || true,
      },
    });

    const onSubmit = async (values) => {
      console.log("values", values);
      try {
        const formData = new FormData();
        formData.append("file", imageUpload);
        formData.append("fileName", imagename);
        formData.append("email", values.email);
        formData.append("role", values.role);
        formData.append("firstName", values.firstName);
        formData.append("password", values.password);
        formData.append("phone", values.phone);
        formData.append("status", values.isActive);
        let url = "admin/users/";
        if (edituser._id) {
          formData.append("_id", edituser._id);
          url = "admin/user/" + edituser._id;
        }
        let responseData = await performRequestFormData(
          url,
          formData,
          token,
          edituser._id ? "PUT" : "POST"
        );
        _imageUpload();
        _imagename();
        console.log("responseDatauser", responseData);
        if (responseData.body) {
          if (responseData.body.status) {
            toast.success("user added successfully");
            reset();
            setVisible(false);
            UserList();
          } else {
            toast.error(responseData.body.message);
          }
        } else {
          toast.error(responseData.error);
        }
      } catch (e) {
        console.log("e", e?.message);
      }
    };
    return (
      <CModal
        size="lg"
        alignment="center"
        visible={visible}
        backdrop='static'
        onClose={() => {
          setVisible(false);
          _edituser({});
          reset();
        }}
      >
        <CModalHeader>
          <CModalTitle>
            {edituser?.firstName ? "Edit User" : "Add User"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form onSubmit={handleSubmit((v) => onSubmit(v))} noValidate>
            <CRow>
              <CCol xs={12} xl={6}>
                <FormWrapper>
                  <CInputGroup className="mb-4 flex-column">
                    <CFormInputStyled
                      type="text"
                      placeholder="Name"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      {...register("firstName", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Minimum length should be 2",
                        },
                      })}
                    />
                    <span className="d-flex mt-2 error_color">
                      {errors.firstName && errors.firstName.message}
                    </span>
                  </CInputGroup>
                  <CInputGroup className="mb-4 flex-column">
                    <CFormInputStyled
                      type="email"
                      placeholder="user email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                          message: "Please enter valid email",
                        },
                      })}
                    />
                    <span className="d-flex mt-2 error_color">
                      {errors.email && errors.email.message}
                    </span>
                  </CInputGroup>
                  <CInputGroup className="mb-4 flex-column">
                    <CFormInputStyled
                      type="Number"
                      placeholder="phone"
                      {...register("phone", {
                        required: "Phone is required",
                        minLength: {
                          value: 2,
                          message: "Minimum length should be 2",
                        },
                      })}
                    />
                    <span className="d-flex mt-2 error_color">
                      {errors.phone && errors.phone.message}
                    </span>
                  </CInputGroup>
                  <CInputGroup className="mb-4 flex-column">
                    <CFormSelectStyled
                      {...register("role", {
                        required: "Role is required",
                      })}
                    >
                      <option
                        value="Admin"
                        selected={editData?.role == "Admin" ? true : false}
                      >
                        Admin
                      </option>
                      <option
                        value="Standard"
                        selected={editData?.role == "Standard" ? true : false}
                      >
                        Standard
                      </option>
                    </CFormSelectStyled>
                    <span className="d-flex mt-2 error_color">
                      {errors.type && errors.type.message}
                    </span>
                  </CInputGroup>
                  {!editData?._id ? (
                    <CInputGroup className="mb-4 flex-column">
                      <CFormInputStyled
                        type="password"
                        placeholder="password"
                        autocomplete="rutjfkde"
                        {...register("password", {
                          required: "password is required",
                          maxLength: {
                            value: 13,
                            message: "Maximum length should be 13",
                          },
                          pattern: {
                            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                            message:
                              "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                          },
                        })}
                      />
                      <span className="d-flex mt-2 error_color">
                        {errors.password && errors.password.message}
                      </span>
                    </CInputGroup>
                  ) : (
                    <></>
                  )}
                </FormWrapper>
              </CCol>
              <CCol xs={12} xl={6}>
                <div className="d-flex flex-column">
                  <CFormLabel>Photo</CFormLabel>
                  <div
                    className="photo-img-model position-relative d-inline-block"
                    style={{ maxWidth: 98 }}
                  >
                    <CFormInput
                      className="position-absolute w-100 h-100 "
                      style={{ opacity: 0 }}
                      type="file"
                      onChange={(e) => {
                        _imageUpload(e.target.files[0]);
                        _imagename(e.target.files[0].name);
                      }}
                    />
                    <img
                      width={98}
                      height={98}
                      style={{ borderRadius: "50%" }}
                      src={
                        imageUpload
                          ? URL.createObjectURL(imageUpload)
                          : editData?.profilepic
                          ? GlobalVar.ProfileImageEndpoint + edit?.profilepic
                          : userImgs
                      }
                    />
                  </div>
                </div>
                <div>
                  {/* <CFormLabel >
                    Status
                  </CFormLabel> */}
                  <div className="check-box-label " style={{ margin: 15 }}>
                    <CFormSwitch
                      label="Status"
                      id="formSwitchCheckDefault"
                      name="isActive"
                      {...register("isActive")}
                    />
                    {/* <CFormCheck inline type="radio" name="status" label="Active" defaultChecked={editData?.status && true} {...register('isActive', {
                      required: 'status is required',
                    })} />
                    <CFormCheck inline type="radio" name="status" label="Inactive" defaultChecked={!editData?.status && true} {...register('status', {
                      required: 'status is required',
                    })} /> */}
                  </div>
                </div>
                <PrimaryButton text="Save" type="submit" />
              </CCol>
            </CRow>
          </form>
        </CModalBody>
      </CModal>
    );
  });

  return (
    <>
      <SearchBarCard text="Users" actions={actionsHandler()} ></SearchBarCard>

      <div className="'table-responsive'" style={{ marginTop: 30 }}>
        <TableComponent tableColumn={tableColumn} tableData={dataList} />
        <FormModal edit={edituser} />
        <ManageInspectionWrapper>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <p className="mb-0">
                {total} Users (showing {offset + 1}-
                {offset + limit < total ? offset + limit : total})
              </p>
            </div>
            <Pagination
              current={paginationData.page}
              total={paginationData.totalPages}
              onPageChange={(d) => {
                console.log("dfdf",d);
                _offset((d - 1) * limit);
              }}
            />
          </div>
        </ManageInspectionWrapper>
      </div>
    </>
  );
};

export default ManageUser;
