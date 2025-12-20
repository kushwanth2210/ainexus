import { motion } from 'framer-motion'

export default function GlowEffect({ children, className = '', intensity = 'normal' }) {
  const intensityClasses = {
    low: 'shadow-lg',
    normal: 'shadow-2xl',
    high: 'shadow-[0_0_60px_rgba(79,70,229,0.3)]',
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-ai-indigo/30 via-ai-blue/30 to-ai-purple/30 rounded-lg blur-xl opacity-75 -z-10 ${intensityClasses[intensity]}`}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {children}
    </motion.div>
  )
}

