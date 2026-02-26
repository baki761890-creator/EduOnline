import React from 'react'
import { FaGraduationCap, FaUsers, FaChalkboardTeacher } from 'react-icons/fa'

const About = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/online-education-concept_23-2148533383.jpg"
            alt="EduOnline"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold mb-4">
            Biz haqimizda <span className="text-yellow-300">EduOnline</span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            EduOnline — zamonaviy texnologiyalar yordamida bilim olishni osonlashtiruvchi
            o‘quv platforma. Bizning maqsadimiz — har bir o‘quvchiga sifatli ta’limni
            uydan chiqmasdan olish imkoniyatini berishdir.
          </p>
          <p className="text-gray-200 leading-relaxed">
            Platformamizda turli sohalar bo‘yicha onlayn kurslar, interaktiv darslar,
            testlar va amaliy mashg‘ulotlar mavjud. Biz bilan o‘rganish — oson, qiziqarli
            va foydali!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <FaGraduationCap className="text-yellow-300 text-4xl mb-2 animate-bounce" />
              <p className="font-semibold">Sertifikatli Kurslar</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-yellow-300 text-4xl mb-2 animate-bounce" />
              <p className="font-semibold">1000+ O‘quvchilar</p>
            </div>
            <div className="flex flex-col items-center">
              <FaChalkboardTeacher className="text-yellow-300 text-4xl mb-2 animate-bounce" />
              <p className="font-semibold">Tajribali Ustozlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
