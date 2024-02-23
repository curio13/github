import {Toaster} from 'react-hot-toast'
import { useState } from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LikesPage from './pages/LikesPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useAuthContext } from './context/AuthContext'


function App() {
 const {authUser,loading}= useAuthContext();
 console.log("Authenticated",authUser)
 if(loading)
 return null;
  return (
    <div className='flex text-white'>
      <Sidebar/>
      <div className='mx-w-5xl my-5 text-white mx-auto transition-all-duration-300 flex-1 ' >
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={ authUser ? <Navigate to={"/"} /> : <LoginPage/>} />
        <Route path='/signup' element={ authUser? <Navigate to={"/"}/>   : <SignUpPage/>} />
        <Route path='/explore' element={ authUser? <ExplorePage/> : <Navigate to={"/login"} />} />
        <Route path='/likes' element={authUser?<LikesPage/>:<Navigate to={"/login"} />} />
        </Routes>
        <Toaster/>
      </div>
    </div>
  )
}

export default App