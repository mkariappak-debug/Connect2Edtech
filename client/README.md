# Connect2Edtech

A premium, modern EdTech website built with **React + Vite + TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting started

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Production build into `dist/`        |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
connect2edtech/
├── index.html
├── vite.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
├── public/
└── src/
    ├── assets/        # images
    ├── components/     # site sections + UI primitives
    ├── pages/          # route pages (Index, Courses, Auth, NotFound)
    ├── layouts/        # shared layout (Toaster + Outlet)
    ├── hooks/
    ├── lib/            # data + helpers
    ├── App.tsx         # routes
    ├── main.tsx        # entry
    └── index.css       # Tailwind + design tokens
```

## Tech

- React 19 + react-router-dom
- Vite 6
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Framer Motion animations
- lucide-react icons
- sonner toasts
