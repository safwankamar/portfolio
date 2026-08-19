# Safwan Onakkal — Portfolio

Personal portfolio site of Safwan Onakkal — Full-Stack Developer, Blockchain Expert, AI Enthusiast.

Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Getting started

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Install dependencies
npm install

# Start the dev server with hot reload
npm run dev
```

The site runs at http://localhost:8080.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run build:dev` | Build using development mode settings |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/
    portfolio/    Page sections — Hero, About, Skills, Projects, Contact, Footer, Navbar
    ui/           shadcn/ui primitives
  hooks/          Shared React hooks
  lib/            Utilities
  pages/          Index and NotFound routes
public/           Static assets served as-is
```

## Deployment

`npm run build` outputs a static site to `dist/`, which can be hosted on any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own server).
