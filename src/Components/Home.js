import React, { useContext } from 'react'
import Body from './Body'
import { ContextProvide } from './Context'
import Welcome from './Welcome'

const Home = () => {
    const {user}=useContext(ContextProvide)
  return (
      <>
          {
              user ? (<Body/>) : (<Welcome/>)
          }
    </>
  )
}

export default Home