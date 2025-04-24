// src/components/Loader.jsx
import React from 'react'
import { motion } from 'framer-motion'
import IconLogo from './logo'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <IconLogo className="w-24 h-24 text-white" />
      </motion.div>
    </div>
  )
}

export default Loader