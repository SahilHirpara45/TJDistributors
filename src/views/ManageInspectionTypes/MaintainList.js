import React from 'react'
import { SecondaryButton } from 'src/components/Buttons/Buttons'
import SearchBarCard from 'src/components/SearchBarCard/SearchBarCard'

const ReprestativeList = () => {
  const actionsHandler = () => {
    return (
      <>
        <SecondaryButton text="Add" />
        <SecondaryButton text="Done" />
      </>
    )
  }

  return (
    <>
      <SearchBarCard
        text="Maintain “Telescoping Seating” Inspection Line Items"
        actions={actionsHandler()}
      ></SearchBarCard>
    </>
  )
}

export default ReprestativeList
