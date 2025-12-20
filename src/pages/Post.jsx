import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Github } from 'lucide-react'
import Markdown from '../components/Markdown'
import Particles from '../components/Particles'
import FloatingOrbs from '../components/FloatingOrbs'
import GlowEffect from '../components/GlowEffect'

// Mock post data - replace with actual data source
const posts = {
  '1': {
    title: 'Getting Started with A2A: Agent-to-Agent Communication',
    date: '2024-01-15',
    content: `
# Getting Started with A2A: Agent-to-Agent Communication

Agent-to-Agent (A2A) communication is revolutionizing how AI systems interact with each other. In this post, we'll explore the fundamentals and build a practical example.

## What is A2A?

A2A refers to communication protocols and patterns that allow autonomous AI agents to communicate, collaborate, and coordinate their actions. This enables complex multi-agent systems where agents can:

- Share information and context
- Coordinate tasks and workflows
- Negotiate and make collective decisions
- Form temporary alliances

## Key Concepts

### Message Passing
Agents communicate through structured messages containing:
- Intent and purpose
- Context and state
- Requested actions
- Metadata and routing info

### Protocol Standards
Common protocols include:
- RESTful APIs for agent endpoints
- WebSocket connections for real-time communication
- Event-driven architectures
- Publish-subscribe patterns

## Example Implementation

Here's a simple example of how two agents might communicate:

\`\`\`javascript
class Agent {
  constructor(name, messageBus) {
    this.name = name;
    this.messageBus = messageBus;
  }

  sendMessage(targetAgent, message) {
    this.messageBus.publish({
      from: this.name,
      to: targetAgent,
      content: message,
      timestamp: Date.now()
    });
  }

  receiveMessage(message) {
    console.log(\`\${this.name} received: \${message.content}\`);
    // Process message and respond
  }
}
\`\`\`

## Next Steps

Check out the GitHub repository for a complete working example with multiple agents communicating in a distributed system.

## Resources

- [Repository Link](https://github.com/yourusername/a2a-example)
- Documentation and examples
- Community discussions
    `,
    githubUrl: 'https://github.com/yourusername/a2a-example',
    tags: ['A2A', 'AI Agents', 'Communication'],
  },
  '2': {
    title: 'Understanding MCP: Model Context Protocol Deep Dive',
    date: '2024-01-10',
    content: `
# Understanding MCP: Model Context Protocol Deep Dive

The Model Context Protocol (MCP) is a framework that standardizes how AI models share and manage context. This post provides a comprehensive overview.

## Introduction to MCP

MCP defines a standardized way for AI models to:
- Share contextual information
- Maintain state across interactions
- Coordinate with other models
- Access external knowledge bases

## Architecture

The protocol consists of several key components:

1. **Context Providers**: Sources of contextual information
2. **Context Consumers**: Models that use the context
3. **Protocol Layer**: Standardized communication format
4. **Storage Layer**: Persistent context storage

## Use Cases

- Multi-turn conversations with context preservation
- Cross-model knowledge sharing
- Distributed AI systems
- Context-aware applications

[Check the repository for implementation details and examples.](https://github.com/yourusername/mcp-example)
    `,
    githubUrl: 'https://github.com/yourusername/mcp-example',
    tags: ['MCP', 'Protocols', 'Context'],
  },
  '3': {
    title: 'Building A2UI: Creating Intuitive Agent Interfaces',
    date: '2024-01-05',
    content: `
# Building A2UI: Creating Intuitive Agent Interfaces

A2UI (Agent-to-User Interface) focuses on creating seamless interactions between AI agents and human users. Learn the patterns and best practices.

## Design Principles

1. **Transparency**: Users should understand what the agent is doing
2. **Control**: Users should have control over agent actions
3. **Feedback**: Clear feedback on agent status and decisions
4. **Trust**: Build trust through reliability and explainability

## Interface Patterns

### Chat-Based Interfaces
Real-time conversational interfaces where users interact naturally with agents.

### Dashboard Interfaces
Visual dashboards showing agent status, tasks, and results.

### API-First Design
RESTful APIs that allow programmatic interaction with agents.

[Explore the example repository to see these patterns in action.](https://github.com/yourusername/a2ui-example)
    `,
    githubUrl: 'https://github.com/yourusername/a2ui-example',
    tags: ['A2UI', 'UI/UX', 'Design'],
  },
}

export default function Post() {
  const { id } = useParams()
  const post = posts[id]

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-ai-indigo hover:text-ai-purple">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Particles />
      <FloatingOrbs />
      <div className="fixed inset-0 mesh-gradient opacity-50 z-0" />
      
      <article className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-ai-indigo hover:text-ai-purple mb-8 transition-all group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.div>
            <span className="group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Back to Blog
            </span>
          </Link>
        </motion.div>

        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 text-black mb-4"
            whileHover={{ x: 5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Calendar className="w-5 h-5" />
            </motion.div>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-indigo-50 text-ai-indigo rounded-full text-sm border border-indigo-200 font-medium"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          {post.githubUrl && (
            <GlowEffect intensity="normal">
              <motion.a
                href={post.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-lg hover:border-ai-indigo/50 transition-all group text-ai-indigo"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Github className="w-5 h-5" />
                </motion.div>
                <span>
                  View Repository
                </span>
              </motion.a>
            </GlowEffect>
          )}
        </motion.header>

        <GlowEffect intensity="low">
          <motion.div
            className="prose prose-lg max-w-none glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute inset-0 shimmer opacity-30" />
            <div className="relative z-10">
              <Markdown content={post.content} />
            </div>
          </motion.div>
        </GlowEffect>
      </article>
    </div>
  )
}

