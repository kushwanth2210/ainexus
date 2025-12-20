import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import Particles from '../components/Particles'
import FloatingOrbs from '../components/FloatingOrbs'
import GlowEffect from '../components/GlowEffect'

// Mock blog posts - replace with actual data source
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with A2A: Agent-to-Agent Communication',
    excerpt: 'Learn how to build AI agents that communicate and collaborate with each other using modern protocols.',
    date: '2024-01-15',
    tags: ['A2A', 'AI Agents', 'Communication'],
  },
  {
    id: '2',
    title: 'Understanding MCP: Model Context Protocol Deep Dive',
    excerpt: 'A comprehensive guide to MCP and how it revolutionizes AI model interactions and context management.',
    date: '2024-01-10',
    tags: ['MCP', 'Protocols', 'Context'],
  },
  {
    id: '3',
    title: 'Building A2UI: Creating Intuitive Agent Interfaces',
    excerpt: 'Explore patterns and best practices for designing user interfaces that seamlessly connect humans with AI agents.',
    date: '2024-01-05',
    tags: ['A2UI', 'UI/UX', 'Design'],
  },
]

export default function Blog() {
  return (
    <div className="relative min-h-screen">
      <Particles />
      <FloatingOrbs />
      <div className="fixed inset-0 mesh-gradient opacity-50 z-0" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            animate={{
              textShadow: [
                '0 0 30px rgba(139, 92, 246, 0.5)',
                '0 0 50px rgba(236, 72, 153, 0.5)',
                '0 0 30px rgba(139, 92, 246, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            AI Learning Blog
          </motion.h1>
          <p className="text-xl text-black font-medium max-w-2xl mx-auto">
            Explore the latest AI technologies through hands-on examples and
            detailed explanations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <GlowEffect key={post.id} intensity="normal">
              <motion.article
                className="glass-effect rounded-2xl overflow-hidden relative group h-full flex flex-col"
                initial={{ y: 50, rotateX: -15 }}
                whileInView={{ y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, 
                      transparent, 
                      rgba(79, 70, 229, 0.3), 
                      rgba(59, 130, 246, 0.3),
                      transparent)`,
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
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 relative z-10 flex flex-col h-full">
                  <motion.div
                    className="flex items-center gap-2 text-sm text-black mb-4"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar className="w-4 h-4" />
                    </motion.div>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </motion.div>
                  <motion.h2
                    className="text-2xl font-bold mb-3 gradient-text"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    {post.title}
                  </motion.h2>
                  <p className="text-black font-medium mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-indigo-50 text-ai-indigo rounded-full text-sm border border-indigo-200 font-medium"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + tagIndex * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-ai-indigo hover:text-ai-purple transition-colors font-semibold group relative mt-auto"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="relative z-10"
                    >
                      Read More
                    </motion.span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>
              </motion.article>
            </GlowEffect>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-slate-700">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

