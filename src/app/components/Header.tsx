'use client'
import { motion } from 'framer-motion'

function Header() {
  return (
    <div className="text-center px-4 pt-10 pb-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-2 flex flex-wrap justify-center gap-x-4" style={{ color: '#F0EEF8' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Did You
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Take It?
        </motion.span>
      </h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-base md:text-lg"
        style={{ color: '#6E6E80' }}
      >
        A little checklist before you step out
      </motion.h2>
    </div>
  )
}

export default Header