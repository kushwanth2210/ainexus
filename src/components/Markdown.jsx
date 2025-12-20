import { motion } from 'framer-motion'

export default function Markdown({ content }) {
  const lines = content.split('\n')
  const elements = []
  let i = 0
  let inCodeBlock = false
  let codeBlockContent = []
  let codeLanguage = ''

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        elements.push({
          type: 'code',
          content: codeBlockContent.join('\n'),
          language: codeLanguage,
        })
        codeBlockContent = []
        codeLanguage = ''
        inCodeBlock = false
      } else {
        // Start of code block
        codeLanguage = line.slice(3).trim()
        inCodeBlock = true
      }
      i++
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      i++
      continue
    }

    if (line.startsWith('# ')) {
      elements.push({
        type: 'h1',
        content: line.slice(2),
      })
    } else if (line.startsWith('## ')) {
      elements.push({
        type: 'h2',
        content: line.slice(3),
      })
    } else if (line.startsWith('### ')) {
      elements.push({
        type: 'h3',
        content: line.slice(4),
      })
    } else if (line.startsWith('- ')) {
      elements.push({
        type: 'list',
        content: line.slice(2),
      })
    } else if (line.trim() === '') {
      elements.push({
        type: 'br',
      })
    } else if (line.trim()) {
      // Process inline markdown
      let processedLine = line
      processedLine = processedLine.replace(
        /`([^`]+)`/g,
        '<code class="bg-indigo-50 px-2 py-1 rounded text-ai-indigo font-mono text-sm border border-indigo-200">$1</code>'
      )
      processedLine = processedLine.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-ai-indigo hover:text-ai-purple underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      processedLine = processedLine.replace(
        /\*\*([^\*]+)\*\*/g,
        '<strong class="font-bold">$1</strong>'
      )
      processedLine = processedLine.replace(
        /\*([^\*]+)\*/g,
        '<em class="italic">$1</em>'
      )

      elements.push({
        type: 'p',
        content: processedLine,
      })
    }

    i++
  }

  // Handle any remaining code block
  if (inCodeBlock && codeBlockContent.length > 0) {
    elements.push({
      type: 'code',
      content: codeBlockContent.join('\n'),
      language: codeLanguage,
    })
  }

  return (
    <div className="markdown-content">
      {elements.map((element, index) => {
        switch (element.type) {
          case 'h1':
            return (
              <motion.h1
                key={index}
                className="text-4xl font-bold mb-6 mt-8 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {element.content}
              </motion.h1>
            )
          case 'h2':
            return (
              <motion.h2
                key={index}
                className="text-3xl font-bold mt-8 mb-4 text-ai-indigo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {element.content}
              </motion.h2>
            )
          case 'h3':
            return (
              <motion.h3
                key={index}
                className="text-2xl font-bold mt-6 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {element.content}
              </motion.h3>
            )
          case 'p':
            return (
              <motion.p
                key={index}
                className="mb-4 text-black leading-relaxed"
                dangerouslySetInnerHTML={{ __html: element.content }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
            )
          case 'code':
            return (
              <motion.pre
                key={index}
                className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg overflow-x-auto my-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <code className="text-ai-indigo font-mono text-sm">
                  {element.content}
                </code>
              </motion.pre>
            )
          case 'list':
            return (
              <motion.li
                key={index}
                className="mb-2 ml-6 text-black list-disc"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {element.content}
              </motion.li>
            )
          case 'br':
            return <br key={index} />
          default:
            return null
        }
      })}
    </div>
  )
}

