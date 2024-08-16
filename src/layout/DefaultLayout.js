import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import styled from 'styled-components'

const ContentWrapper = styled.div``

const DefaultLayout = (props) => {
  return (
    <div>
      <AppSidebar />
      <ContentWrapper className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          {props.children}
        </div>
        {/* <AppFooter /> */}
      </ContentWrapper>
    </div>
  )
}

export default DefaultLayout
