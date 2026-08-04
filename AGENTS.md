# Project Guide

## Overview

This repository contains the single-page marketing website for 1Commerce LLC's bookstore web design and technology services. It is a static-first TanStack Start application deployed on Netlify.

## Architecture

- `src/routes/__root.tsx` defines the HTML shell, global metadata, and stylesheet import.
- `src/routes/index.tsx` contains the complete landing page and its small mobile navigation interaction.
- `src/styles.css` contains the design system, responsive layout, component styles, and motion preferences.
- `public/` contains static browser assets such as the favicon.
- `netlify.toml` contains the Netlify build and local development configuration.

## Conventions

- Keep the site single-page unless a new route is explicitly requested.
- Use semantic landmarks and descriptive link text.
- Preserve keyboard focus styles and reduced-motion support.
- Keep colors, spacing, and typography centralized through CSS custom properties.
- Use Lucide icons rather than emoji or raster icon assets.
- Keep external links opening in a new tab paired with `rel="noreferrer"`.
- Prefer CSS visuals and optimized local assets over remote image dependencies.

## Development

- Install dependencies with `pnpm install`.
- Run locally with `pnpm dev`.
- Create a production bundle with `pnpm build`.

## Non-Obvious Decisions

- The To Be Read showcase is a code-built browser mockup rather than a remote screenshot, avoiding a brittle external image dependency.
- Contact and consultation actions use `mailto:` links so the static site requires no form backend or stored customer data.
- The page uses a restrained editorial aesthetic inspired by independent bookstores rather than a generic software-agency design.
