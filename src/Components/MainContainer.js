import React from 'react'
import Header from './Header'
import Home from './Home'

const MainContainer = () => {
  return (
    <div className='w-full px-6 py-4 bg-neutral-900'>
        <Header/>
        <Home/>
    </div>
  )
}

export default MainContainer
