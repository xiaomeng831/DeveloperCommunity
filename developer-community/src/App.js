import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import {GlobalStyle} from './style.js'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
      </div>
    )
  }
}


export default App;
