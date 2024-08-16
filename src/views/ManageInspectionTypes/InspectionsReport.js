import React from 'react'
import { SecondaryButton } from '../../components/Buttons/Buttons'
import SimpleCard from 'src/components/SimpleCard/SimpleCard'
import { DoneButtonWrapper } from './Styled'
import FilterCard from 'src/components/FilterCard/FilterCard'

const InspectionsReport = () => {
  return (
    <>
      <SimpleCard text="Inspections Report">
        <FilterCard />

        {/* <DoneButtonWrapper>
          <SecondaryButton text="Done" />
        </DoneButtonWrapper> */}
      </SimpleCard>
    </>
  )
}

export default InspectionsReport
