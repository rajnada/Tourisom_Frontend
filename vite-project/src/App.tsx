import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
<Router>
<div>
  <h1>Tourism WebApp</h1>
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<RegistrationForm />} />
  </Routes>
</div>
</Router>
  )
}

export default App
