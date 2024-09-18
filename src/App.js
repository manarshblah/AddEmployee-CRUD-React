import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmpCreate from './component/EmpCreate'
import EmpDetails from './component/EmpDetails'
import EmpEdit from './component/EmpEdit'
import EmpListing from './component/EmpListing'
import Home from './pages/Home'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/employee/listing' element={<EmpListing />}></Route>
            <Route path='/employee/create' element={<EmpCreate />}></Route>

            <Route path='/employee/detail/:empid' element={<EmpDetails />}></Route>
            <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App