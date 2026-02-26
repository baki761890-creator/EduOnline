import React, { useEffect, useState } from 'react'
import Footer from './layout/Footer'
import Main from './layout/Main'
import Navbar from './layout/Navbar'
import { Route, Routes, useNavigate } from 'react-router'
import Contact from './components/contact'
import About from './components/about'
import Coursess from './components/coursess'
import Register from './components/register'
import Login from './components/login'

const App = () => {
  const [clas, setClas] = useState<string>('HTML')
  const [user, setUser] = useState<any>(null) 

  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <div>
      <Navbar setClas={setClas} clas={clas} user={user} logOut={logOut} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Main setClas={setClas} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/html" element={<Coursess clas={clas} setClas={setClas}/>} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>

      <Footer setClas={setClas} clas={clas} />
    </div>
  )
}

export default App
