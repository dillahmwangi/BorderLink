import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import Infohub from './Pages/Infohub'
import Profile from './Pages/Profile'
import Forget from './Pages/Forget'
import Document from './Pages/Document'
import Otp from './Pages/Otp'
import Signup from './Pages/Signup'
import Newpass from './Pages/Newpass'
import Createprof from './Pages/Createprof'



const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path='/signup'element= {<Signup/>} />
    <Route path='/chat'element={<Chat/>}/>
    <Route path='/info-hub'element={<Infohub/>}/>
    <Route path='/profile'element={<Profile/>}/>
    <Route path='/forget'element= {<Forget/>} />
    <Route path='/document'element={<Document/>}/>
    <Route path='/otp'element={<Otp/>}/>
    <Route path='/newpass'element={<Newpass/>}/>
    <Route path='/createprofile'element={<Createprof/>}/>
  </Routes>
 
 
  </BrowserRouter>
  )
}

export default App