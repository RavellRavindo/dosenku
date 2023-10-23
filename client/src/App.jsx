import React from 'react'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { ResetPassword } from './pages/ResetPassword'
import ResetConfirmation from './pages/ResetConfirmation'
import Verify from './pages/Verfify'
import LecturerProfile from './pages/LecturerProfile'
import Admin from './pages/Admin'

export const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetconfirmation" element={<ResetConfirmation />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/lecturerprofile" element={<LecturerProfile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App