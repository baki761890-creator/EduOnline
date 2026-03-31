import React, { useState, type ChangeEvent } from 'react'
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaBookOpen,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'
import type { User } from '../types/user'

type CourseName = 'HTML' | 'CSS' | 'JS' | 'ReactJS' | 'Redux'


type NavbarProps = {
  clas: CourseName
  setClas: React.Dispatch<React.SetStateAction<CourseName>>
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  logOut?: () => void
}

const Navbar: React.FC<NavbarProps> = ({
  setClas,
  clas,
  user,
  setUser,
  logOut,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleLogout = (): void => {
    localStorage.removeItem('user')
    setUser(null)
    logOut?.()
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setClas(e.target.value as CourseName)
  }

  return (
    <nav className="relative flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 shadow-lg z-50">
      <h1 className="text-2xl font-bold flex items-center gap-2 cursor-pointer">
        <FaBookOpen className="text-yellow-300 text-3xl animate-bounce" />
        <Link to="/" className="hover:text-yellow-300 transition">
          EduOnline
        </Link>
      </h1>

      {/* DESKTOP */}
      <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
        {user ? (
          <>
            <Link to="/html">
              <button className="rounded-2xl bg-white/10 px-6 py-3 hover:bg-black transition">
                Start Study
              </button>
            </Link>

            <select
              value={clas}
              onChange={handleSelect}
              className="p-2 rounded-lg text-gray-700"
            >
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JS">JS</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Redux">Redux</option>
            </select>

            <Link to="/" className="flex items-center gap-2 hover:text-yellow-300">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-yellow-300">
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-300">
              <FaPhoneAlt /> Contact
            </Link>

            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-yellow-300"
                />
              ) : (
                <FaUser className="text-yellow-300" />
              )}
              <span>{user.displayName ?? 'User'}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-pink-600 rounded-full"
              >
                <IoIosLogOut />
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="flex items-center gap-2">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2">
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact" className="flex items-center gap-2">
              <FaPhoneAlt /> Contact
            </Link>
            <Link to="/login" className="px-5 py-2 bg-pink-500 rounded-full">
              Log in
            </Link>
            <Link to="/register" className="px-5 py-2 bg-white text-pink-600 rounded-full">
              Sign up
            </Link>
          </>
        )}
      </ul>

      {/* MOBILE BUTTON */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-indigo-800 z-50 p-6 transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">EduOnline</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <select
          value={clas}
          onChange={(e) => {
            handleSelect(e)
            setMenuOpen(false)
          }}
          className="p-2 w-full rounded-lg text-gray-800"
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="ReactJS">ReactJS</option>
          <option value="Redux">Redux</option>
        </select>

        <button
          onClick={handleLogout}
          className="w-full mt-6 px-4 py-2 bg-white text-pink-600 rounded-full"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar