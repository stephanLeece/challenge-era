# What is this?

This is the main README for the monorepo.

Each app and package contains its own README with more specific details.

There is an accompanying guide - DESIGN_NOTES.md - that covers key decisions and challenges in the docs folder.

# No i mean what is this repository?
This repository is a Turborepo-powered monorepo containing two frontend applications and a set of shared packages consumed by both apps.

These packages provide:
- ESLint / TypeScript / Tailwind configuration
- A shared UI component library (`ui`)
- A shared data-fetching service (`profile-service`)

TypeScript is used throughout the entire repository.

---

## Apps

### Next.js App (`apps/next-js-app`)
- Server-side rendered (SSR)
- SEO-friendly

### React SPA (`apps/react-spa`)
- Built with Vite
- Client-side rendered (CSR)

Both apps share the same look and functionality.

---

## Packages

### `profile-service`
- Exposes functions and types for fetching user profile data from a remote server
- Includes unit tests via Vitest

### `ui`
- React component library
- Tailwind-based design system
- Reusable UI components (grid, navbar, loading spinner, etc.)
- Framework-agnostic (no Next/Vite-specific APIs)

### `eslint-config`
- Shared ESLint configuration used across all apps and packages
- Provided by the Turborepo starter so i can't take credit for this.

### `@repo/typescript-config`
- Shared TypeScript configuration used across all apps and packages
- Again, provided by the Turborepo starter so i can't take credit for this.

### `@repo/tailwind-config`
- Shared Tailwind configuration used across all apps and packages
- Defines design tokens and theme values
- Exposes theme tokens for brand colours. I don't love that these come from here rather than the ui package, but i would need to spend more time tweaking config to resolve this, after some unsuccessful timeboxed attempts. 

---

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/repo)
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

### Development workflow note

Thanks to Turborepo magic, you don't need to rebuild packages everytime changes are made. This means:
- Changes in shared packages are immediately reflected in consuming apps
- You do not need to rebuild packages constantly

The only time i had to explicity run build was in the ui package when i created a new component file, but not when i changed an existing component. very cool!

---

## Prerequisites

### Node version

Requires Node.js version 18 or higher

### Package manager

This project uses pnpm as the package manager. It can be used with other package managers (e.g. Yarn or npm), but additional configuration changes would be required because the monorepo setup relies on pnpm-specific features (pnpm-workspace.yaml, pnpm-lock.yaml)

For consistency and correctness, pnpm is recommended.

### Environment variables

The React SPA relies on an ENV variable for API proxying (CORS handling for the profile service). You'll need to create this file and set a value before you can successfully run the react-spa app. Check the react-spa app's README for details and an `.env.example` file.

---

## Running the Project

#### Installation

```bash
pnpm install
```

#### Run all apps:
```bash
pnpm dev
```

#### Run a single app:
`pnpm --filter ['app name'] dev`

For example, for the react-spa:
```bash
pnpm --filter react-spa dev
```

#### Build all packages/apps:
```bash
pnpm build
```

#### Build single packages:
`pnpm build --filter ['app/package name']`

(Note: you can also run app/package commands from within their respective folders, bu it's a nice time saver to be able to do it from the repo root)