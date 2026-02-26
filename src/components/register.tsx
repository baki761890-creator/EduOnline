import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router';
import { Flip, ToastContainer, toast } from 'react-toastify';
import { GrGoogle } from 'react-icons/gr';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) navigate('/');
  }, [navigate]);

  const register = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Barcha maydonlarni to‘ldiring!');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Parollar mos emas!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      toast.success('Ro‘yxatdan o‘tish muvaffaqiyatli!');
      setTimeout(() => navigate('/login'), 2000);
    } catch {
      toast.error('Xatolik yuz berdi!');
    }
  };

  const registerGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const userData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      toast.success('Google orqali muvaffaqiyatli kirdingiz!');

      setTimeout(() => navigate('/html'), 2500);
    } catch (error) {
      toast.error('Google bilan kirishda xatolik yuz berdi!');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-pink-600">
      <form
        onSubmit={register}
        className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-white">Ro‘yxatdan o‘tish</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email manzil"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parol"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />

        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Parolni tasdiqlang"
          className="w-full px-4 py-2 border border-white/40 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />

        <button className="w-full bg-white text-pink-600 font-semibold py-2 rounded-md hover:bg-pink-100 transition duration-200">
          Ro‘yxatdan o‘tish
        </button>

        <Link to="/login" className="text-green-200 underline flex justify-center hover:text-white transition">
          Allaqachon akkauntingiz bormi?
        </Link>

        <div>
          <button
            onClick={registerGoogle}
            className="flex items-center justify-center w-full bg-white text-pink-600 py-2 rounded-md hover:bg-pink-100 transition duration-200"
          >
            <GrGoogle className="mr-2" /> Google bilan kirish
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  );
};

export default Register;
