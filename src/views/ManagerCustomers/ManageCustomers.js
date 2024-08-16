import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebarBrand, CSidebarNav, CSidebarToggler, CImage } from '@coreui/react'
import { AppSidebarNav } from 'src/components/AppSidebarNav'
import SidebarLogo from '../../assets/brand/SidebarLogo.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { Link } from 'react-router-dom'

// sidebar nav config
import navigation from '../../_nav'
import { CSidebarStyled } from 'src/components/Styled'
import SearchBarCard from 'src/components/SearchBarCard/SearchBarCard'
import { SearchInput } from 'src/components/CommonInputs'

const AppSidebar = () => {
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const { sidebarShow } = useSelector((state) => state.common)
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
  return (
    <>
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
    <SearchBarCard text="Manage Customers" actions={actionsHandler()}></SearchBarCard>
    </>
  )
}

export default React.memo(AppSidebar)
