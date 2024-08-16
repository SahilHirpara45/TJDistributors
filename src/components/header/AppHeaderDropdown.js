import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { logout } from "src/store/reducers/user.reducer";
import avatar8 from "./../../assets/images/avatars/8.jpg";
import { CDropdownToggleStyled } from "../Styled";
import { useDispatch, useSelector } from "react-redux";
import { GlobalVar } from "src/common/globalVar";
import { Avatar } from "src/views/ManageUser/ManageUser";
import { Navigate, useNavigate } from "react-router-dom";

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((s) => s.user);
  console.log(userData);
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggleStyled
        placement="bottom-end"
        className="py-0"
        caret={false}
      >
        {userData?.profilepic ? (
          <>
            <CAvatar
              src={GlobalVar.ProfileImageEndpoint + userData?.profilepic}
            />
          </>
        ) : (
          <div className="d-flex align-items-center">
            <Avatar>
              {" "}
              <div className="user-img" style={{ marginRight: 0 }}>
                <div
                  className="avatar-img d-flex align-items-center justify-content-center"
                  style={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    border: "1px solid #E82225",
                    color: "#E82225",
                  }}
                >
                  {userData?.firstName?.charAt(0)}
                </div>
              </div>
            </Avatar>{" "}
          </div>
        )}
        <span className="user_name">{userData?.firstName}</span>
      </CDropdownToggleStyled>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>

        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>s */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownDivider /> */}
        <CDropdownItem
        style={{cursor: 'pointer'}}
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
