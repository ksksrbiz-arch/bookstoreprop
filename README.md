# 1Commerce Bookstore Web Services

A warm, responsive single-page marketing site for 1Commerce LLC. The site presents custom web design packages, ongoing care plans, consultation services, and reference work for independent bookstore owners.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 tooling with custom global CSS
- Lucide React icons
- Netlify deployment through the TanStack Start Vite plugin

## Local Development

Requirements: Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

The Vite development server runs at `http://localhost:3000` by default.

## Production

```bash
pnpm build
```

Netlify uses the configuration in `netlify.toml` and publishes the generated client output from `dist/client`.

## Site Structure

The full page lives in `src/routes/index.tsx`, global presentation is defined in `src/styles.css`, and document metadata is configured in `src/routes/__root.tsx`.
