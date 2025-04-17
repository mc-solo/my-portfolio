// src/components/Hero.jsx
import React from 'react'

/**
 * Hero Component
 *
 * This component displays the landing (home/about) section of your portfolio.
 * It includes your name, a personal intro, and your portrait with a grayscale hover effect.
 */
const Hero = () => {
  return (
    <div className="container mx-auto py-20 px-4 flex flex-col items-center">
      {/* Name heading with gradient text */}
      <h1 className="mt-10 text-5xl md:text-6xl font-bold mb-4 text-gray-200">
        Wondwosen Asegid
      </h1>
      {/* Profile picture with grayscale to color hover effect */}
      <img 
        src="/my_portrait.JPG"
        alt="Wondwosen Asegid"
        className="w-48 h-48 object-cover rounded-full filter grayscale hover:filter-none transition duration-500"
      />
      {/* Short roles tagline */}
      <h3 className="mt-5 text-gray-200 text-center text-base md:text-lg">
        Developer | System Architecture Enthusiast
      </h3>

      {/* Soft but goal-oriented introduction */}
      <p className="text-xl text-gray-400 mb-4 text-center max-w-2xl mt-10">
        I’m a focused developer who enjoys building things that matter. I stay grounded, dedicated to my goals, and constantly push to grow both technically and personally.
      </p>

    </div>
  )
}

export default Hero
