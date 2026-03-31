import React, { useEffect, useState } from 'react'
import Footer from './layout/Footer'
import Main from './layout/Main'
import Navbar from './layout/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Contact from './components/contact'
import About from './components/about'
import Coursess from './components/coursess'
import Register from './components/register'
import Login from './components/login'
import type { CourseName } from './data/data'
import type { User } from './types/user'

const App: React.FC = () => {
  const [clas, setClas] = useState<CourseName>('HTML')
  const [user, setUser] = useState<User | null>(null)

  const navigate = useNavigate()

  const logOut = (): void => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error('User parse error:', error)
        localStorage.removeItem('user')
      }
    }
  }, [])

  return (
    <div>
      <Navbar
        setClas={setClas}
        clas={clas}
        user={user}
        logOut={logOut}
        setUser={setUser}
      />

      <Routes>
        <Route path="/" element={<Main setClas={setClas} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/html" element={<Coursess clas={clas} setClas={setClas} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>

      <Footer setClas={setClas} clas={clas} />
    </div>
  )
}

export default App