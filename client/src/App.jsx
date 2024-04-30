import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='sign-in' element={<SignIn/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    {/* <h1 className="text-3xl font-bold underline">App</h1> */}
    </BrowserRouter>
  )
}

export default App