import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Chat from './Pages/Chat'
import Infohub from './Pages/Infohub'
import Profile from './Pages/Profile'



const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path='/login'element= {<Login/>} />
    <Route path='/chat'element={<Chat/>}/>
    <Route path='/info-hub'element={<Infohub/>}/>
    <Route path='/profile'element={<Profile/>}/>
  </Routes>
 
 
  </BrowserRouter>
  )
}

export default App