import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'

const MainContainer = () => {
  return (
    <div className='relative bg-zinc-900'>
        <Header/>
        <Home/>
        <About/>
    </div>
  )
}

export default MainContainer
