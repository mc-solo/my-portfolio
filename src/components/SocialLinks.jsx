// src/components/SocialLinks.jsx
import React from 'react'
// Import icons from react-icons: GitHub, LinkedIn, YouTube, and LeetCode.
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

/**
 * SocialLinks Component
 *
 * This component renders social media icons connected vertically by lines.
 * The component is fixed at the bottom left of the viewport and does not scroll with the rest of the page.
 *
 * Each icon is wrapped in an anchor tag (<a>) with a target URL pointing to your respective profile.
 * Replace the URLs with your actual profile links.
 *
 * No parameters are needed. The component returns JSX representing the vertical icon column.
 */
const SocialLinks = () => {
  return (
    <>
      {/* Vertical sidebar for md and up */}
      <div className="fixed bottom-20 right-6 flex-col items-center gap-6 z-50 hidden md:flex">
        <a
          href="https://github.com/mc-solo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={34} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={34} />
        </a>
        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube size={34} />
        </a>
        <a
          href="https://leetcode.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="LeetCode"
        >
          <SiLeetcode size={34} />
        </a>
      </div>
      {/* Horizontal bar for small screens */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-8 z-50 md:hidden bg-gray-900/80 rounded-full px-6 py-2 shadow-lg">
        <a
          href="https://github.com/mc-solo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube size={28} />
        </a>
        <a
          href="https://leetcode.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
          aria-label="LeetCode"
        >
          <SiLeetcode size={28} />
        </a>
      </div>
    </>
  )
}

export default SocialLinks
