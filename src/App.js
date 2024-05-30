import React from 'react'
import Context from './Components/Context'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Context>
        <Navbar />
        <Home/>
      </Context>
    </>
  )
}

export default App