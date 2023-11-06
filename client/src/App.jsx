import React from 'react'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { Signup } from './template-1/pages/auth/Signup'
import { Login } from './template-1/pages/auth/Login'
import { ResetPassword } from './template-1/pages/ResetPassword'
import ResetConfirmation from './template-1/pages/ResetConfirmation'
import Verify from './template-1/pages/Verfify'
import LecturerProfile from './template-1/pages/LecturerProfile'
import Admin from './template-1/pages/Admin'
import Dashboard from './Dashboard'
import EditableTag from './template-2/EditableTag'

export const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetconfirmation" element={<ResetConfirmation />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/lecturerprofile" element={<LecturerProfile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editabletag" element={<EditableTag/>} />
      </Routes>
    </Router>
  )
}

export default App