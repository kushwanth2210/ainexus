import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Code, Brain, Github, Linkedin } from 'lucide-react'
import Particles from '../components/Particles'
import FloatingOrbs from '../components/FloatingOrbs'
import GlowEffect from '../components/GlowEffect'
import RobotAnimation from '../components/RobotAnimation'

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Particle System */}
      <Particles />

      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 mesh-gradient opacity-50 z-0" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            >
              AI Explorer
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-800 font-medium mb-8 max-w-2xl relative z-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Discover cutting-edge AI technologies through hands-on examples,
              detailed explanations, and real-world implementations
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 relative z-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <GlowEffect intensity="high">
                <Link
                  to="/blog"
                  className="group relative px-8 py-4 bg-gradient-to-r from-ai-indigo to-ai-blue text-white rounded-lg font-semibold flex items-center gap-2 overflow-hidden hover:from-ai-indigo hover:to-ai-purple transition-all shadow-lg shadow-ai-indigo/30"
                >
                  <span className="absolute inset-0 shimmer" />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Blog
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </GlowEffect>

              <div className="flex gap-4">
                <GlowEffect intensity="normal">
                  <a
                    href="https://github.com/kushwanth2210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-4 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-lg font-semibold flex items-center gap-2 overflow-hidden hover:bg-white transition-all shadow-md"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </GlowEffect>

                <GlowEffect intensity="normal">
                  <a
                    href="https://www.linkedin.com/company/106194239/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-4 bg-[#0077b5] text-white rounded-lg font-semibold flex items-center gap-2 overflow-hidden hover:bg-[#006da3] transition-all shadow-lg shadow-blue-500/20"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </GlowEffect>
              </div>
            </motion.div>
          </motion.div>

          {/* Robot Animation Container */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <RobotAnimation />
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technologies We Explore
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TechCard
            icon={<Sparkles className="w-12 h-12" />}
            title="A2A"
            description="Agent-to-Agent communication protocols and patterns for autonomous AI systems working together"
            gradient="from-ai-indigo to-ai-blue"
            delay={0}
          />
          <TechCard
            icon={<Zap className="w-12 h-12" />}
            title="MCP"
            description="Model Context Protocol - revolutionary framework for AI model interactions and context management"
            gradient="from-ai-blue to-ai-cyan"
            delay={0.2}
          />
          <TechCard
            icon={<Code className="w-12 h-12" />}
            title="A2UI"
            description="Agent-to-User Interface patterns, creating seamless interactions between AI agents and human users"
            gradient="from-ai-purple to-ai-indigo"
            delay={0.4}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative container mx-auto px-4 py-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className="text-4xl font-bold mb-6 gradient-text"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
            >
              Learn by Doing
            </motion.h2>
            <motion.p
              className="text-lg text-slate-800 font-medium mb-6"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Each blog post comes with a tried and tested repository,
              complete with explanations, code examples, and best practices.
            </motion.p>
            <motion.ul
              className="space-y-4"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                'Hands-on code examples',
                'Step-by-step tutorials',
                'Real-world use cases',
                'Best practices and patterns',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-slate-800 font-medium"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Brain className="w-5 h-5 text-ai-indigo" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <GlowEffect intensity="normal">
            <motion.div
              className="glass-effect rounded-2xl p-8 relative overflow-hidden group"
              initial={{ x: 50, rotateY: -15 }}
              whileInView={{ x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                className="text-6xl mb-4 relative z-10"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 gradient-text relative z-10">Join the Exploration</h3>
              <p className="text-slate-800 font-medium relative z-10">
                Stay updated with the latest AI technologies, frameworks, and
                patterns. Build your knowledge through practical examples and
                expert insights.
              </p>
            </motion.div>
          </GlowEffect>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <GlowEffect intensity="high">
          <motion.div
            className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden group"
            initial={{ y: 30, scale: 0.9 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="absolute inset-0 shimmer opacity-50" />
            <h2 className="text-4xl font-bold mb-6 gradient-text relative z-10">
              Ready to Explore?
            </h2>
            <p className="text-xl text-slate-800 font-medium mb-8 relative z-10">
              Dive into our collection of AI technology blogs and start learning
              today.
            </p>
            <Link
              to="/blog"
              className="inline-block relative px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold overflow-hidden hover:bg-gray-800 transition-colors group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Browse All Posts
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </GlowEffect>
      </section>
    </div>
  )
}

function TechCard({ icon, title, description, gradient, delay }) {
  return (
    <GlowEffect intensity="normal">
      <motion.div
        className="glass-effect rounded-2xl p-8 hover:border-ai-indigo/50 transition-all relative overflow-hidden group h-full flex flex-col"
        initial={{ y: 50, rotateX: -15 }}
        whileInView={{ y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring", stiffness: 100 }}
        whileHover={{
          y: -15,
          scale: 1.03,
          rotateY: 5,
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.2), transparent)`,
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            className={`w-16 h-16 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4 relative flex-shrink-0`}
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              rotate: 360,
              scale: 1.2,
            }}
            style={{
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            {icon}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-3 gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h3>
          <p className="text-slate-800 font-medium flex-grow">
            {description}
          </p>
        </div>
      </motion.div>
    </GlowEffect>
  )
}

