import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'


const SocialLinks = () => {
  return (
    <>
      {/* Vertical sidebar for md and up */}
      <div className="fixed bottom-20 right-6 flex-col items-center gap-6 z-50 hidden md:flex">
        <a
          href="https://github.com/mc-solo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={34} />
        </a>
        <a
          href="https://linkedin.com/in/wondwosen-asegid-3a30aa279"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={34} />
        </a>
        <a
          href="https://youtube.com/@WondwosenAsegid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube size={34} />
        </a>
        <a
          href="https://leetcode.com/mc-solo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="LeetCode"
        >
          <SiLeetcode size={34} />
        </a>
      </div>
      {/* Horizontal bar for small screens */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-8 z-50 md:hidden bg-gray-900/80 rounded-full px-6 py-2 shadow-lg">
        <a
          href="https://github.com/mc-solo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/wondwosen-asegid-3a30aa279"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://youtube.com/@WondwosenAsegid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube size={28} />
        </a>
        <a
          href="https://leetcode.com/mc-solo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
          aria-label="LeetCode"
        >
          <SiLeetcode size={28} />
        </a>
      </div>
    </>
  )
}

export default SocialLinks
