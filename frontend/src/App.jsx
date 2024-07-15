import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Showbook from './pages/ShowBook'
import Home from './pages/Home'
import Editbook from './pages/EditBook'
import Deletebook from './pages/DeleteBook'
import Createbook from './pages/CreateBook'


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