// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const skills = [
    'PHP/Laravel', 'Node.js/Express', 'Java/Spring Boot',
    'PostgreSQL', 'RESTful APIs', 'GraphQL',
    'Microservices', 'Docker/Kubernetes', 
    'Flutter/Dart', 'Firebase',
     'System Architecture'
  ]

  return (
    <div className="container mx-auto py-20 px-4 lg:px-8">
      <div className="w-full space-y-16">
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8 lg:space-y-10"
          >
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-emerald-400 font-mono"
              >
                Hi, I'm
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                Wondwosen 
                <span className="text-emerald-400">Asegid</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-300 bg-gradient-to-r from-emerald-400/20 to-transparent p-4 rounded-lg">
                Software Developer & Systems Architecture Enthusiast
              </h2>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              I'm obsessed with creating software that makes a meaningful difference in people's lives. I'm driven by a passion to build innovative systems that solve real-world problems and make a tangible impact. I'm always looking for the next big idea that can empower people and organizations, and I'm addicted to bringing that vision to life.
            </p>

            <div className="flex gap-4 justify-center md:justify-center lg:justify-start">
              <motion.a
                whileHover={{ y: -2 }}
                className="px-6 py-3 bg-emerald-400/90 hover:bg-emerald-400 text-gray-900 rounded-lg font-semibold transition-colors"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.querySelector('#projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className="px-6 py-3 border border-emerald-400/50 hover:border-emerald-400 text-emerald-400 rounded-lg font-semibold transition-colors"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative flex justify-center items-center"
>
  <div className="relative overflow-hidden rounded-2xl w-64 h-64 lg:w-72 lg:h-72 group">
    {/* Border effect (pseudo ::after) */}
    <div className="absolute top-3.5 left-3.5 w-full h-full border-2 border-emerald-400 rounded-2xl z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none"></div>
    {/* Main wrapper */}
    <div className="relative w-full h-full rounded-2xl bg-emerald-400 shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
      {/* Overlay blend (pseudo ::before) */}
      <div className="absolute inset-0 bg-gray-900/80 mix-blend-screen rounded-2xl pointer-events-none"></div>
      <img
        src="/my_portrait.JPG"
        alt="Wondwosen Asegid"
        className="img block w-full h-full object-cover rounded-2xl grayscale contrast-125 mix-blend-multiply transition-all duration-300 group-hover:grayscale-0 group-hover:mix-blend-normal"
      />
    </div>
  </div>
</motion.div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        {/* Details Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-100 flex items-center gap-3">
              <span className="text-emerald-400">#</span>
              Personal Background
            </h3>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed text-xl">
                I've been actively coding since grade 9, when a brilliant mentor named Nazrawi Eyob introduced me to Java during school breaks. What began as lunchtime lessons quickly evolved into a serious passion, leading me to develop numerous projects throughout my high school years.
              </p>
              <p className="leading-relaxed text-xl">
                After high school, I enrolled at Addis Ababa Science and Technology University but ultimately left when I couldn't secure a place in the software engineering department. Determined to pursue my passion, I've since built an extensive portfolio of projects while continuing my education as a third-year Computer Science student, focusing on practical development skills and innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-100 flex items-center gap-3">
              <span className="text-emerald-400">#</span>
             My Technical Arsenal
            </h3>
            <p className="leading-relaxed text-gray-400 mb-4 text-xl">
              I primarily focus on the logical components of projects, specializing in backend development where I excel at creating robust, scalable systems. While I have some experience with frontend technologies, my true passion lies in building the powerful engines that drive applications behind the scenes, bringing my backend solutions to life.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-800 hover:bg-emerald-400/10 rounded-full text-gray-300 text-sm border border-emerald-400/20 hover:border-emerald-400/40 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero