// src/App.jsx
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import { div } from 'framer-motion/client'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) 
    return () => clearTimeout(timer)
  }, [])

  if (loading) return (
    <div className="bg-gray-900">
      <Navbar />
      <Loader />
    </div>
  )

  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen relative">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="projects" className="py-20 px-4">
        <Projects />
      </section>

      <section id="experience" className="py-20 px-4 ">
        <Experience />
      </section>

      <section id="contact" className="py-20 px-4 ">
        <Contact />
      </section>

      <SocialLinks />
      <div className="text-center text-gray-400 text-sm py-4">
        Designed and developed by Wondwosen Asegid &copy; {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default App