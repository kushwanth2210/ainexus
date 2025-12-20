# theAILearning.com

A modern, animated website for exploring AI technologies including A2A, MCP, A2UI, and more.

## Features

- 🎨 Beautiful animated design with gradient effects
- 📱 Fully responsive layout
- 🚀 Built with React, Vite, and Tailwind CSS
- ✨ Smooth animations using Framer Motion
- 📝 Blog structure ready for AI technology posts
- 🔗 GitHub repository integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

### GitHub Pages

1. Update `vite.config.js` with your repository name:
```js
base: '/your-repo-name/',
```

2. Install GitHub Pages deployment plugin:
```bash
npm install --save-dev gh-pages
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

### Other Platforms

The `dist` folder contains the static files ready to deploy to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## Project Structure

```
src/
  components/    # Reusable components
  pages/         # Page components
  App.jsx        # Main app component
  main.jsx       # Entry point
  index.css      # Global styles
```

## Customization

- Update blog posts in `src/pages/Blog.jsx` and `src/pages/Post.jsx`
- Modify colors in `tailwind.config.js`
- Add new pages in `src/pages/`
- Customize animations in component files

## Technologies

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## License

MIT

