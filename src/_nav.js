import React from 'react'
import { CNavGroup, CNavItem } from '@coreui/react'
import { DashboardSvg, InspectionsSvg, ReportsSvg, AdminSvg, UsersSvg } from './assets/svgs'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardSvg height="25px" />,
  },
  {
    component: CNavGroup,
    name: 'Inspections',
    to: '/inspections',
    icon: <InspectionsSvg height="25px" />,
    items: [
      {
        component: CNavItem,
        name: 'Open Inspections',
        to: '/inspections/open',
      },
      {
        component: CNavItem,
        name: 'Completed Inspections',
        to: '/inspections/completed',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/reports',
    icon: <ReportsSvg height="24px" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Admin',
    to: '/admin',
    icon: <AdminSvg height="24px" />,
    items: [
      {
        component: CNavItem,
        name: 'Manage Inspection Types',
        to: '/admin/inspectionTypes',
      },
      {
        component: CNavItem,
        name: 'Manage Customers',
        to: '/admin/customers',
      },
      {
        component: CNavItem,
        name: 'Manage Users',
        to: '/users',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Manage Users',
  //   to: '/users',
  //   icon: <UsersSvg height="25px" />,
  // },
]

export default _nav
