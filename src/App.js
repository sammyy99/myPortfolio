import React from 'react'
import MainContainer from './Components/MainContainer'
import './index.css';
import { Provider } from 'react-redux';
import appstore from './Redux/appstore';

const App = () => {
  return (
    <Provider store={appstore}>
    <div className=''>
      <MainContainer/>
    </div>
    </Provider>
  )
}

export default App
