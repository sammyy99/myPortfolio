import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from "./Projects"
import Services from "./Services"
import Blogs from "./Blogs"

const MainContainer = () => {
  return (
    <div className='relative bg-zinc-900'>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Services/>
        <Blogs/>
    </div>
  )
}

export default MainContainer
