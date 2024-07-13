import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Showbook from './pages/showbook'
import Home from './pages/home'
import Editbook from './pages/editbook'
import Deletebook from './pages/deletebook'
import Createbook from './pages/createbook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/edit/:id' element={<Editbook/>} />
      <Route path='/books/delete/:id' element={<Deletebook/>} />
      <Route path='/books/create' element={<Createbook/>} />
      <Route path='/books/details/:id' element={<Showbook/>} />
    </Routes>
  )
}

export default App