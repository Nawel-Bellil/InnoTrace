import React from 'react'
import Login from './pages/login'
import { Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>

  )
}

export default App