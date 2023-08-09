import React from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'
import { useContext } from 'react'


function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {channel}
        <ComponentF />
    </div>
  )
}

export default ComponentE