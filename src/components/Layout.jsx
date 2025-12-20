import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen relative">
      <motion.nav
        className="fixed top-0 w-full z-50 glass-effect backdrop-blur-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center gap-5 group">
                <div className="w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <img
                    src="/logo.png"
                    alt="AI Nexus Logo"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
                <span className="text-4xl font-bold text-slate-900 tracking-tight">
                  AI <span className="gradient-text">Nexus</span>
                </span>
              </Link>
            </motion.div>
            <div className="flex gap-6">
              <NavLink to="/" currentPath={location.pathname}>
                Home
              </NavLink>
              <NavLink to="/blog" currentPath={location.pathname}>
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </motion.nav>
      <main className="pt-20 relative z-10">
        {children}
      </main>
    </div>
  )
}

function NavLink({ to, children, currentPath }) {
  const isActive = currentPath === to

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        className={`relative px-4 py-2 transition-all ${isActive
          ? 'text-ai-indigo font-semibold'
          : 'text-black hover:text-ai-indigo font-medium'
          }`}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ai-indigo via-ai-blue to-ai-purple"
            initial={false}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  )
}

