// src/components/Projects.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Multi-Tenant Rate-Limited REST API',
    description: 'Rate-limits API requests on a per-tenant basis while supporting multiple tenants on the same server',
    tech: ['PHP', 'Laravel', 'Redis', 'MySQL'],
    languages: ['PHP'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-Time Data Notification Service',
    description: 'Pushes real-time alerts to connected browser clients via websockets.',
    tech: ['Redis','Django', 'PostgreSQL'],
    languages: ['Python'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Multi-Tenant Blog Platform with Subdomain Isolation',
    description: 'A CMS system where each tenant has its own subdomain and content [posts, comments...] and optional custom theme isolation.',
    tech: ['Django', 'Postgres', 'React.js', 'Redis', 'Nginx'],
    languages: ['Python', 'JavaScript'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Event-Driven Order Processor',
    description: 'a Spring Boot microservice that consumes OrderCreated events from Kafka, processes payments, and publishes OrderCompleted or OrderFailed',
    tech: ['Java', 'Spring Boot', 'Postgres', 'Redis', 'Kafka',],
    languages: ['Java',],
    github: '#',
    demo: '#'
  },
]

// Get all unique programming languages from projects
const getAllLanguages = () => {
  const languageSet = new Set();
  projects.forEach(project => {
    if (project.languages) {
      project.languages.forEach(language => languageSet.add(language));
    }
  });
  return Array.from(languageSet).sort();
};

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
      
      <p className="text-gray-400 mb-4 text-xl">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <motion.span 
            key={tech}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="px-3 py-1 text-sm bg-gray-800 hover:bg-emerald-400/10 rounded-full text-gray-300 border border-emerald-400/20 hover:border-emerald-400/40 transition-colors"
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
          className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <FiGithub className="mr-2" /> Code
        </a>
        <a 
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <FiExternalLink className="mr-2" /> Demo
        </a>
      </div>
    </div>
  </motion.div>
)

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive 
      ? 'bg-emerald-400/90 text-gray-900' 
      : 'bg-gray-800 text-gray-400 border border-emerald-400/20 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400'}`}
  >
    {label}
  </button>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const languages = getAllLanguages();
  
  useEffect(() => {
    if (activeFilter === null) {
      setFilteredProjects(projects);
      return;
    }
    
    const filtered = projects.filter(project => {
      return project.languages && project.languages.includes(activeFilter);
    });
    
    setFilteredProjects(filtered);
  }, [activeFilter]);

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
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mb-10 text-center text-gray-400"
        >
          <p className="mb-3 text-xl">
            The projects displayed here are personal demos created during my free time and weekends to showcase my technical skills and capabilities.
          </p>
          <p className="text-xl">
            While I've developed numerous professional projects for governments, NGOs, and private clients, those codebases cannot be shared due to non-disclosure agreements. 
            These demo projects, although not in production, demonstrate my expertise and approach to software development.
          </p>
        </motion.div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <FilterButton 
              key="all"
              label="All Projects" 
              isActive={activeFilter === null} 
              onClick={() => setActiveFilter(null)} 
            />
            {languages.map(language => (
              <FilterButton 
                key={language}
                label={language} 
                isActive={activeFilter === language} 
                onClick={() => setActiveFilter(language)} 
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400">
                No projects match the selected filter.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects