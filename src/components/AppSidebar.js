import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebarBrand, CSidebarNav, CSidebarToggler, CImage } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import SidebarLogo from '../assets/brand/SidebarLogo.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { Link } from 'react-router-dom'

// sidebar nav config
import navigation from '../_nav'
import { CSidebarStyled } from './Styled'

const AppSidebar = () => {
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const { sidebarShow } = useSelector((state) => state.common)

  return (
    <CSidebarStyled
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}

    >
      <CSidebarBrand className="d-md-flex" to="/">
        <Link to="/dashboard">
          <CImage src={SidebarLogo} alt="SidebarLogo" />
        </Link>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>

      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebarStyled>
  )
}

export default React.memo(AppSidebar)
