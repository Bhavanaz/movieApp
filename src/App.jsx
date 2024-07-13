import React from 'react'
import ViewMovie from './Components/ViewMovie'
import AddMovie from './Components/AddMovie'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/'element={<ViewMovie/>}></Route>
      <Route path='/Add'element={<AddMovie/>}></Route>
     </Routes>
    </div>
  )
}

export default App