// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'

/**
 * Hero Component
 *
 * This component displays the landing (home/about) section of your portfolio.
 * It includes your name, a personal intro, and your portrait with a grayscale hover effect.
 */
const Hero = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="w-full space-y-12">
        {/* Left section with text */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-200">
              Wondwosen Asegid
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-300">
              Full Stack Developer & System Architecture Enthusiast
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a passionate developer with a strong foundation in both frontend and backend technologies. My journey in tech has been driven by a deep curiosity for building scalable systems and creating impactful solutions.
            </p>

          </motion.div>

          {/* Right section with image */}

          <motion.div

            initial={{ opacity: 0, scale: 0.8 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.5 }}

          >

            <img

              src="/my_portrait.JPG"

              alt="Wondwosen Asegid"

              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg filter grayscale hover:filter-none transition duration-500 border-2 border-gray-700"

            />

          </motion.div>

        </div>



        {/* Background section */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.2 }}

          className="space-y-6 max-w-3xl"

        >

          <h3 className="text-2xl font-semibold text-gray-200">

            Background

          </h3>

          <div className="space-y-4 text-gray-400">

            <p className="leading-relaxed">

              With a background in Computer Science and a focus on modern web technologies, I specialize in building robust and user-centric applications. I'm particularly interested in system architecture, API design, and creating seamless user experiences.

            </p>

            <p className="leading-relaxed">

              Currently, I'm focused on full-stack development, working with technologies like React, Node.js, and various cloud platforms. I'm passionate about clean code, performance optimization, and implementing best practices in software development.

            </p>

          </div>

        </motion.div>



        {/* Skills section */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.4 }}

          className="space-y-4"

        >

          <h3 className="text-2xl font-semibold text-gray-200">

            Core Skills

          </h3>

          <div className="flex flex-wrap gap-3">

            {[

              'JavaScript/TypeScript',

              'React.js',

              'Node.js',

              'Python',

              'SQL/NoSQL',

              'System Design',

              'API Development',

              'Cloud Services',

              'DevOps'

            ].map((skill) => (

              <span key={skill} className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm">

                {skill}

              </span>

            ))}

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default Hero
