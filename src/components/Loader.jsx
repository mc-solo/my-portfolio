// src/components/Loader.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex items-center justify-center h-32 w-32">
        {/* Central Pulsating Core */}
        <motion.div
          className="absolute w-8 h-8 bg-gray-400 rounded-full"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Orbiting Particles */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-gray-900 rounded-full shadow-glow"
            style={{
              filter: 'drop-shadow(0 0 8px #39FF14)',
            }}
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            animate={{
              scale: [0.5, 1, 0.5],
              rotate: 360,
              x: ["-150%", "-150%", "-150%"],
              y: [
                "0%", 
                `${Math.sin((index * 120 * Math.PI) / 180) * 100}%`, 
                `${Math.cos((index * 120 * Math.PI) / 180) * 100}%`
              ],
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "anticipate",
            }}
          />
        ))}

        {/* Holographic Ring */}
        <motion.div
          className="absolute border-2 border-gray-400 rounded-full"
          style={{
            width: '120%',
            height: '120%',
            filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.5))',
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

export default Loader