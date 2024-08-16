import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SidebarActive } from '../assets/svgs'
import { CBadge } from '@coreui/react'
import { StyledNavLink } from './Styled'
import { useSelector } from 'react-redux'

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()
  const { userData } = useSelector((s) => s.user)
  console.log('userData', userData)
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}

        <div className="active_svg">
          <SidebarActive />
        </div>
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
          component: NavLink,
        })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }



  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        className="sidebar-icon"
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => (item?.items ? (item?.name == 'Admin' ? (userData?.role == 'Admin' ? navGroup(item, index) : '') : navGroup(item, index)) : navItem(item, index)))}

    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
