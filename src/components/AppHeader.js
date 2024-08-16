import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

// import { AppBreadcrumb } from './index'
import SidebarLogo from '../assets/brand/SidebarLogo.png'

import { FiSearch } from 'react-icons/fi'
import { AiOutlineBell } from 'react-icons/ai'

import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import { CHeaderStyled } from './Styled'
import { switchSiderBar } from 'src/store/reducers/common.reducer'

const AppHeader = () => {
  const dispatch = useDispatch()

  return (
    <CHeaderStyled position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1 me-auto"
          onClick={() => dispatch(switchSiderBar())}
        >
          <CIcon className="toggle_icon" icon={cilMenu} size="lg" />
        </CHeaderToggler>

        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
          <CImage src={SidebarLogo} alt="HeaderLogo" />
        </CHeaderBrand> */}

        {/* <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CHeaderNav> */}

        <CHeaderNav>
          {/* <CNavItem>
            <CNavLink href="#">
              <FiSearch color="white" fontSize="20px" />
            </CNavLink>
          </CNavItem> */}

          {/* <CNavItem>
            <CNavLink href="#">
              <AiOutlineBell color="white" fontSize="22px" />
            </CNavLink>
          </CNavItem> */}

          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>

        <CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>

      {/* <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeaderStyled>
  )
}

export default AppHeader
