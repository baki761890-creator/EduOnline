import React, { useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { Flip, ToastContainer, toast } from 'react-toastify'
import { GrGoogle } from 'react-icons/gr'
import 'react-toastify/dist/ReactToastify.css'
import type { User } from '../types/user'

type RegisterProps = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const Register: React.FC<RegisterProps> = ({ setUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) navigate('/')
  }, [navigate])

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      toast.error('Barcha maydonlarni to‘ldiring!')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Parollar mos emas!')
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      const userData: User = {
        displayName: name, // ✅ name ishlatildi
        email: user.email ?? '',
        photoURL: user.photoURL ?? '',
        uid: user.uid,
      }

      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)

      toast.success('Ro‘yxatdan o‘tish muvaffaqiyatli!')
      navigate('/login')
    } catch (error: unknown) {
      toast.error('Xatolik yuz berdi!')
      console.error(error)
    }
  }

  const registerGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user

      const userData: User = {
        displayName: user.displayName ?? 'User',
        email: user.email ?? '',
        photoURL: user.photoURL ?? '',
        uid: user.uid,
      }

      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)

      toast.success('Google orqali muvaffaqiyatli kirdingiz!')
      navigate('/html')
    } catch (error: unknown) {
      toast.error('Google bilan kirishda xatolik yuz berdi!')
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-pink-600">
      <form
        onSubmit={register}
        className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Ro‘yxatdan o‘tish
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email manzil"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parol"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md"
        />

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Parolni tasdiqlang"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md"
        />

        <button className="w-full bg-white text-pink-600 font-semibold py-2 rounded-md">
          Ro‘yxatdan o‘tish
        </button>

        <Link to="/login" className="text-green-200 underline flex justify-center">
          Allaqachon akkauntingiz bormi?
        </Link>

        <button
          type="button"
          onClick={registerGoogle}
          className="flex items-center justify-center w-full bg-white text-pink-600 py-2 rounded-md"
        >
          <GrGoogle className="mr-2" /> Google bilan kirish
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" transition={Flip} />
    </div>
  )
}

export default Register