# Deployment Guide

## GitHub Pages Deployment

### Option 1: GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site when you push to the main branch.

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Manual Deployment with gh-pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js` to set the correct base path:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
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

### Option 3: Custom Domain (theAILearning.com)

1. Build the site:
```bash
npm run build
```

2. In your repository settings → Pages:
   - Set source to "GitHub Actions" or "Deploy from a branch"
   - Add your custom domain in the "Custom domain" field
   - Follow GitHub's instructions to configure DNS

3. Update `vite.config.js` for custom domain:
```js
export default defineConfig({
  plugins: [react()],
  base: '/',  // Use root for custom domain
})
```

## Other Deployment Options

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to Netlify's dashboard.

### AWS S3 + CloudFront

1. Build the site:
```bash
npm run build
```

2. Upload the `dist` folder contents to an S3 bucket
3. Enable static website hosting
4. Configure CloudFront for custom domain

## Building for Production

Always test your production build locally:

```bash
npm run build
npm run preview
```

This builds and serves the production version locally so you can verify everything works before deploying.

