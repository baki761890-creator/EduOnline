import React, { useState } from 'react'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase'
import { Flip, toast, ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router'
import { GrGoogle } from 'react-icons/gr'
import type { User } from '../types/user'

type LoginProps = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const logIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Iltimos, barcha maydonlarni to‘ldiring!')
      return
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      const userData: User = {
        displayName: user.displayName ?? '',
        email: user.email ?? '',
        photoURL: user.photoURL ?? '',
        uid: user.uid,
      }

      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)

      toast.success('Tizimga muvaffaqiyatli kirdingiz! 👍')

      setTimeout(() => navigate('/html'), 2500)
    } catch (error: unknown) {
      toast.error('Email yoki parol noto‘g‘ri!')
      console.error(error)
    }
  }

  const logInGoogle = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user

      const userData: User = {
        displayName: user.displayName ?? '',
        email: user.email ?? '',
        photoURL: user.photoURL ?? '',
        uid: user.uid,
      }

      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)

      toast.success('Google orqali muvaffaqiyatli kirdingiz! 👍')

      setTimeout(() => navigate('/html'), 2500)
    } catch (error: unknown) {
      toast.error('Google bilan kirishda xatolik yuz berdi!')
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-pink-600">
      <form
        onSubmit={logIn}
        className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Tizimga kirish
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email manzil"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />

        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Parol"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />

        <button
          type="submit"
          className="w-full bg-white text-pink-600 font-semibold py-2 rounded-md hover:bg-pink-100 transition duration-200"
        >
          Kirish
        </button>

        <p className="text-center text-white">
          Hisobingiz yo‘qmi?{' '}
          <Link to="/register" className="text-green-200 underline">
            Ro‘yxatdan o‘ting
          </Link>
        </p>

        <button
          type="button"
          onClick={logInGoogle}
          className="flex items-center justify-center w-full bg-white text-pink-600 py-2 rounded-md hover:bg-pink-100 transition duration-200"
        >
          <GrGoogle className="mr-2" /> Google bilan kirish
        </button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        transition={Flip}
      />
    </div>
  )
}

export default Login