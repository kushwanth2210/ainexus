import { motion } from 'framer-motion'

export default function FloatingOrbs() {
  const orbs = [
    { size: 200, x: '10%', y: '20%', color: 'rgba(79, 70, 229, 0.15)', duration: 20 },
    { size: 300, x: '80%', y: '60%', color: 'rgba(59, 130, 246, 0.12)', duration: 25 },
    { size: 250, x: '50%', y: '80%', color: 'rgba(139, 92, 246, 0.15)', duration: 30 },
    { size: 180, x: '20%', y: '70%', color: 'rgba(6, 182, 212, 0.12)', duration: 22 },
    { size: 220, x: '70%', y: '10%', color: 'rgba(79, 70, 229, 0.14)', duration: 28 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            backgroundColor: orb.color,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.3, 0.5, 0.2, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 2,
          }}
        />
      ))}
    </div>
  )
}

