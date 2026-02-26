import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { courses } from '../data/data'
import { Link, useNavigate } from 'react-router'
import { Flip, toast, ToastContainer } from 'react-toastify'

const Main = ({setClas}) => {
  const navigate = useNavigate()

  const handleStart = () => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/html') 
    } else {
            toast.error("Iltimos ro'yhatdan o'ting");

            setTimeout(()=>{
                    navigate('/register') 

            },3500)
      
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 text-white px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-[60px]">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4">
          <FaBookOpen className="text-yellow-300 text-6xl animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            O‘rganishdan hech qachon <br /> <span className="text-yellow-300">to‘xtamang!</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            Biz bilan zamonaviy IT va til kurslarini o‘rganing. Onlayn ta’lim platformasi — istalgan joydan, istalgan vaqtda!
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleStart}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-transform duration-300 hover:scale-105"
            >
              Boshlash
            </button>
            <button className="border border-yellow-400 text-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-transform duration-300 hover:scale-105">
              <Link to={'/about'}>Batafsil</Link>
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Online Learning"
            className="w-64 md:w-96 animate-float drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {courses.map((item, index) => (
          <div
          onClick={()=>{setClas(item.title) ;
            navigate("/html");}}
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-72">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2 drop-shadow-lg">{item.title}</h2>
              <p className="text-sm text-gray-200 mb-3 line-clamp-3">{item.description}</p>
              <span className="text-sm font-medium bg-yellow-400/80 text-gray-900 px-3 py-1 rounded-full w-max">
                ⏱ {item.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
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
    </section>
  )
}

export default Main
