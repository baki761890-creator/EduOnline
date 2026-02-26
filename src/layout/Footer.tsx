import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { classes } from '../data/data'
import { Link } from 'react-router'

const Footer = ({clas, setClas}) => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2"><span className="text-yellow-300">EduOnline</span></h2>
          <p className="text-gray-300 mt-2 max-w-sm">Zamonaviy onlayn ta’lim platformasi — o‘rganish, rivojlanish va muvaffaqiyat sari bir qadam!</p>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left font-medium items-center">
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300"><Link to={"/"}>Home</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300"><Link to={"about"}>About</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300"><Link to={"/contact"}>Contact</Link></li>
           <select   value={clas} onChange={(e)=>setClas(e.target.value)}  className='w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' name="" id="">
                       <option>HTML</option>
              <option>CSS</option>
              <option>JS</option>
              <option>ReactJS</option>
            </select>
        </ul>

        <div className="flex gap-5 text-2xl">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300"><FaFacebook /></a>
          <a href="https://www.instagram.com/werasfgnm/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300"><FaInstagram /></a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300"><FaTelegram /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300"><FaYoutube /></a>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-6 border-t border-indigo-500 pt-4 text-sm"> © {new Date().getFullYear()} EduOnline. Barcha huquqlar himoyalangan.</div>
    </footer>
  )
}

export default Footer
 