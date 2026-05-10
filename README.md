# What is this?

This is the main README for the monorepo.

Each app and package contains its own README with more specific details.

There is an accompanying guide - DESIGN_NOTES.md - that covers key decisions and challenges.

# No i mean what is this repository?
This repository is a Turborepo-powered monorepo containing two frontend applications and a set of shared packages consumed by both apps.

These packages provide:
- ESLint / TypeScript / Tailwind configuration
- A shared UI component library
- A shared data-fetching service (`profile-service`)

TypeScript is used throughout the entire repository.

this REAS

---

## Apps

### Next.js App (`apps/next-js-app`)
- Server-side rendered (SSR)
- SEO-friendly

### React SPA (`apps/react-spa`)
- Built with Vite
- Client-side rendered
- Shares the same core UI and data logic as the Next.js app

Both apps share the same look and functionality.

---

## Packages

### `profile-service`
- Exposes functions and types for fetching user profile data from a remote server
- Includes unit tests (Vitest)

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
- Currently separate from the UI package to keep setup simpler (this could be improved with more time)

---



## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/repo)
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

---

## Running the Project

### Development workflow note

Turborepo + pnpm workspaces handle package linking.

This means:
- Shared packages are consumed directly from source in development
- Changes in shared packages are immediately reflected in apps
- No need to rebuild packages after changes (in most cases)

Only explicit `pnpm build` runs produce production builds.

---

## Prerequisites

### Package manager

This project uses **pnpm** as the package manager.

npm or yarn could work with adjustments, but pnpm is required because the monorepo relies on:

- `pnpm-workspace.yaml`
- `pnpm-lock.yaml`
- workspace-based dependency linking

Stick with pnpm for consistency.

---

### Environment variables

The React SPA requires environment variables for API proxying (CORS handling for the profile service).

Check the React SPA README for required variables and an example `.env` file.

---

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
