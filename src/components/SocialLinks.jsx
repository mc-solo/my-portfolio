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
    // fixed position at left, aligned with navbar height; z-50 ensures it sits on top of other content.
    <div className="fixed top-20 left-4 flex flex-col items-center gap-6 z-50">
      {/* GitHub Icon */}
      <a
        href="https://github.com/mc-solo" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition-colors"
      >
        <FaGithub size={34} />
      </a>
      {/* Vertical line between icons */}


      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com/in/yourprofile"  // Replace with your LinkedIn profile URL.
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition-colors"
      >
        <FaLinkedin size={34} />
      </a>


      {/* YouTube Icon */}
      <a
        href="https://youtube.com/yourchannel"  // Replace with your YouTube channel URL.
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition-colors"
      >
        <FaYoutube size={34} />
      </a>


      {/* LeetCode Icon */}
      <a
        href="https://leetcode.com/yourusername"  // Replace with your LeetCode profile URL.
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition-colors"
      >
        <SiLeetcode size={34} />
      </a>
    </div>
  )
}

export default SocialLinks
