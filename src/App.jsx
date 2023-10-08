import React from 'react'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { Signup } from './pages/auth/Signup'
import { Login } from './pages/auth/Login'
import { ResetPwd } from './pages/auth/ResetPwd'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpwd" element={<ResetPwd />} />
      </Routes>
    </Router>
  )
}

export default App