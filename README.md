# Yousri Ben Ali — Portfolio

Creative Full-Stack Developer portfolio, built with **Vite + Tailwind CSS + GSAP + Lucide icons**.

## Stack

- **Vite** — build tool + dev server
- **Tailwind CSS** (via PostCSS, no CDN — production-ready)
- **GSAP + ScrollTrigger** — scroll-driven animations
- **Lucide** — icons (`<i data-lucide="...">` pattern)

## Getting started

> **Note:** If a partial `node_modules/` directory already exists in this folder from an earlier attempt, delete it first (right-click → Delete in File Explorer, or `rmdir /s /q node_modules` in PowerShell) before running install.

```powershell
npm install
npm run dev
```

The dev server starts at http://localhost:5173 and will open automatically.

## Build for production

```powershell
npm run build
npm run preview
```

The production bundle is emitted into `dist/`.

## Project structure

```
.
├── index.html              # Vite entry, full markup (no CDN scripts)
├── src/
│   ├── main.js             # All interactive logic + GSAP timelines + lucide bootstrap
│   └── style.css           # Tailwind directives + custom CSS (scrollbar, grid-bg, etc.)
├── tailwind.config.js      # Brand color palette + Inter/JetBrains Mono fonts + light: variant
├── postcss.config.js
├── vite.config.js
├── package.json
└── example.txt             # Original single-file HTML (kept for reference)
```

## Customization notes

- **Brand colors** live in `tailwind.config.js` under `theme.extend.colors.brand`.
- **Fonts** are loaded via Google Fonts in `index.html` and configured in `tailwind.config.js`.
- **Theme toggle** flips a `light` class on `<html>`. A `light:` Tailwind variant is wired up in `tailwind.config.js` so utilities like `light:bg-slate-50` work.
- **Icons**: any new `<i data-lucide="icon-name"></i>` is automatically rendered by `createIcons` in `src/main.js`.
- **GSAP animations**: hero intro, scroll reveals, timeline, and capability-card stagger are all set up in `initAnimations()` inside `src/main.js`.
