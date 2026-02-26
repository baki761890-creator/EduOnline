import React, { useEffect, useState } from 'react'
import { HTML, CSS, JS, Reactjs, Redux } from '../data/dataCourses'
import { classes } from '../data/data'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import { FaBars, FaTimes } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

/* ===== TYPES ===== */
type CourseName = 'HTML' | 'CSS' | 'JS' | 'ReactJS' | 'Redux'

interface CourseItem {
  title: string
  link: string
}

interface CoursessProps {
  clas: CourseName
  setClas: React.Dispatch<React.SetStateAction<CourseName>>
}

const Coursess: React.FC<CoursessProps> = ({ clas, setClas }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
      navigate('/login')
    }
  }, [navigate])

  let data: CourseItem[] = []

  if (clas === 'HTML') data = HTML
  else if (clas === 'CSS') data = CSS
  else if (clas === 'JS') data = JS
  else if (clas === 'ReactJS') data = Reactjs
  else if (clas === 'Redux') data = Redux
  else return <div>Bu bo‘lim hali mavjud emas</div>

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 mt-[70px]">

        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block md:w-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg h-[500px] overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-4">{clas}</h1>
          <ul className="space-y-3">
            {data.map((item: CourseItem, index: number) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeIndex === index
                    ? 'bg-red-600'
                    : 'bg-white/10 hover:bg-white/20'
                  }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden fixed top-5 left-5 z-50 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={20} />
        </button>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-purple-800 z-50 p-6 transition-transform duration-300 md:hidden overflow-x-auto ${menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{clas}</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/20"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <ul className="space-y-3">
            {data.map((item: CourseItem, index: number) => (
              <li
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setMenuOpen(false)
                }}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeIndex === index
                    ? 'bg-red-600'
                    : 'bg-white/10 hover:bg-white/20'
                  }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col gap-[30px] justify-center items-center w-full">
          <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${data[activeIndex].link}`}
              title={data[activeIndex].title}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <button
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition hover:scale-110"
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0 ? data.length - 1 : activeIndex - 1
                )
              }
            >
              <GrLinkPrevious />
            </button>

            <ul className="flex flex-wrap gap-4 justify-center">
              {classes.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setClas(item as CourseName)}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition hover:scale-110"
              onClick={() =>
                setActiveIndex(
                  activeIndex === data.length - 1 ? 0 : activeIndex + 1
                )
              }
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coursess