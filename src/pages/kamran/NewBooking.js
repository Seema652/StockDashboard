import React from 'react'
import NewTransfer from '../../components/kamran/NewTransfer'
import NewTransferTop from '../../components/kamran/NewTransferTop'
import Heading from '../../common/kamran/Heading'

function NewBooking() {
  return (
    <div>
      <NewTransferTop/>
      <Heading/>
      <NewTransfer/>
    </div>
  )
}

export default NewBooking
