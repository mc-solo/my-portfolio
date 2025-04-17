// src/components/Projects.jsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Distributed Task Scheduler',
    description: 'A scalable backend system for distributed task scheduling and execution',
    tech: ['Go', 'Kubernetes', 'Redis', 'PostgreSQL'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-Time Data Pipeline',
    description: 'High-throughput data processing pipeline with fault-tolerant architecture',
    tech: ['Apache Kafka', 'Flink', 'Java', 'Cassandra'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Serverless API Gateway',
    description: 'A lightweight serverless gateway for managing microservices communication',
    tech: ['AWS API Gateway', 'Lambda', 'Node.js', 'DynamoDB'],
    github: '#',
    demo: '#'
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="relative group bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
  >
    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray-500/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10">
      {/* Folder Icon */}
      <svg 
        className="w-12 h-12 mb-4 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" 
        />
      </svg>

      <h3 className="text-2xl font-bold mb-2 text-gray-400">
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <motion.span 
            key={tech}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="px-3 py-1 text-sm bg-gray-800/50 rounded-full text-gray-300"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <FiGithub className="mr-2" /> Code
        </a>
        <a 
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
        >
          <FiExternalLink className="mr-2" /> Demo
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Projects