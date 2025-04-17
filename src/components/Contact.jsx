// src/components/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

/**
 * Contact Component
 *
 * This component displays a professional contact section with a form for email communication
 * and additional contact information. It follows the monochromatic style of the portfolio.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server or email service
    // For now, we'll simulate a successful submission
    setFormStatus('success')
    setTimeout(() => {
      setFormStatus(null)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-200">Contact Me</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-400">
          I'm interested in freelance opportunities, collaborations, and discussing innovative ideas.
          Feel free to reach out if you have any questions or just want to say hello!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 px-4">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-300">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300 resize-none"
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors w-full md:w-auto"
            >
              <FiSend />
              <span>Send Message</span>
            </motion.button>
            
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-3 bg-gray-800/70 text-gray-300 rounded-lg text-center"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:w-1/3 bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-300">Where to Find Me</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <FiMail className="text-gray-400 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-gray-300 font-medium">Email</h4>
                <a 
                  href="mailto:wondwosen.asegid@gmail.com" 
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  wondwosen.asegid@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <FiPhone className="text-gray-400 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-gray-300 font-medium">Phone</h4>
                <p className="text-gray-400">+251911563689</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <FiLinkedin className="text-gray-400 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-gray-300 font-medium">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/wondwosen-asegid-3a30aa279/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  linkedin.com/in/wondwosen-asegid
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <FiGithub className="text-gray-400 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-gray-300 font-medium">GitHub</h4>
                <a 
                  href="https://github.com/mc-solo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  github.com/mc-solo
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm">
              Prefer to schedule a call? Feel free to book a time slot through my calendar.
            </p>
            <a 
              href="#" 
              className="mt-3 inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors text-sm"
            >
              Schedule a Meeting
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
