# Personal Finance Dashboard

A production-ready fintech dashboard built with React 18, TypeScript, Tailwind CSS, Recharts, and Framer Motion. Modeled after the Kösten Expense Manager design.

## Features

- **Dashboard** — animated stat cards, income/expense charts, category donut, recent transactions, EMI alerts
- **Transactions** — add/edit/delete with search, filter, pagination; supports Cash/UPI/Card/Bank Transfer
- **Investments** — track Stocks, Mutual Funds, Gold, FD, Crypto, PPF; P&L and ROI
- **Reports** — monthly summaries, category breakdowns, PDF/Excel export, print
- **Local Storage** — all data persists across sessions with seed data on first load

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

```bash
npm install -D gh-pages
# In vite.config.ts, set: base: '/your-repo-name/'
npm run build
npx gh-pages -d dist
```

## Deploy to Vercel / Netlify

Just connect your GitHub repo — both platforms auto-detect Vite. Build command: `npm run build`, Output dir: `dist`.

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Recharts (charts)
- Framer Motion (animations)
- React Router v6
- jsPDF + XLSX (exports)
- Local Storage (persistence)
