import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = []
    let mouseX = 0
    let mouseY = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create new particle
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          opacity: 1,
          hue: Math.random() * 60 + 220,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.opacity -= 0.02

        if (particle.opacity <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 65%, ${particle.opacity})`
        ctx.fill()

        ctx.shadowBlur = 15
        ctx.shadowColor = `hsla(${particle.hue}, 70%, 65%, ${particle.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ mixBlendMode: 'screen', opacity: 0.7 }}
    />
  )
}

