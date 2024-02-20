import {Toaster} from 'react-hot-toast'
import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LikesPage from './pages/LikesPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex text-white'>
      <Sidebar/>
      <div className='mx-w-5xl my-5 text-white mx-auto transition-all-duration-300 flex-1 ' >
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/explore' element={<ExplorePage/>} />
        <Route path='/likes' element={<LikesPage/>} />
        </Routes>
        <Toaster/>
      </div>
    </div>
  )
}

export default App