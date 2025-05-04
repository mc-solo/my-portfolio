// src/components/Experience.jsx
import React from 'react'

/**
 * Experience Component
 *
 * This component displays a list of your professional experiences.
 * Each experience is shown in a card-like container with details such as role, company, duration, and a brief description.
 *
 * No parameters are passed to this component. It returns JSX representing the experience section.
 */
const Experience = () => {
  // Define a list of experience objects.
  // Each object contains the role, company, duration, and a short description.
  const experiences = [
    {
      role: 'Backend Engineer',
      company: 'Tewos Technology Solutions',
      duration: '2024 - Present | Full-Time',
      description: 'I have contributed for the design and implementation of  multiple web apps and mobile projects for scalability and efficiency.'
    },
  ]

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Professional Work Experience</h2>
      <p className="text-gray-300 text-center mb-8 px-4 max-w-4xl mx-auto">
        Hey, Take it easy on me :) Even though I've worked on lots of personal projects, I'm still a beginner when it comes to professional work experience. Just wanted to let you know!
      </p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          // The key is necessary for React to track list items.
          <div key={index} className="relative group bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray-500/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Experience role */}
            <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
            {/* Company information */}
            <p className="text-sm text-gray-300 mb-1">
              <span className="font-semibold">Company:</span> {exp.company}
            </p>
            {/* Duration */}
            <p className="text-sm text-gray-300 mb-1">
              <span className="font-semibold">Duration:</span> {exp.duration}
            </p>
            {/* Description */}
            <p className="text-gray-300 text-xl">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
