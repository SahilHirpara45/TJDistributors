import React from 'react'
// import { Link } from 'react-router-dom'
import { HoverButton, SecondaryButton } from '../../components/Buttons/Buttons'
import SearchBarCard from 'src/components/SearchBarCard/SearchBarCard'
import { TelescopingButtonWrapper } from './Styled'
import { SearchInput } from 'src/components/CommonInputs'

const TelescopingSeating = () => {
  const actionsHandler = () => {
    return (
      <>
        {/* <Link to="/addUser"> */}
        <SecondaryButton text="Add Representative" />
        {/* </Link> */}
        <SearchInput />
      </>
    )
  }

  return (
    <>
      <SearchBarCard text="Telescoping Seating Inspection" actions={actionsHandler()}>
        <TelescopingButtonWrapper>
          <HoverButton text="Download Report" />
          <HoverButton text="Download Certificate of Inspection" />
          <HoverButton text="Email Copy" />
          <HoverButton text="Complete All Related" />
          <HoverButton text="Complete" />
        </TelescopingButtonWrapper>
      </SearchBarCard>
    </>
  )
}

export default TelescopingSeating
