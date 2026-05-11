# `ui`

This package is a shared React component library used across the monorepo.

It provides reusable UI components to ensure consistency between consuming apps’ UIs.

---

## What this package does

- Provides reusable React components (e.g. grid, navbar, loaders)
- Uses Tailwind CSS for styling

---

## Why this exists

Without this package, each application would need to:

- Recreate shared UI components
- Duplicate styling

---

## Styling approach

This package uses **Tailwind CSS** as its styling system.

- Components are styled using Tailwind utility classes
- A `ui:` prefix is used to scope styles and avoid conflicts with consuming applications

This approach allows components to be safely consumed across multiple frameworks without style collisions.

---

## Components

Components are (React) framework-agnostic and designed to work in both:
- Next.js (SSR)
- React SPA (CSR)

---

## How to use

In package.json > dependencies:
`"@repo/profile-service": "workspace:*",`

Then Components can be imported directly from the package:

```ts
import { Typography } from "@repo/ui/typography";
```

---

## Developing/Building

New components require this package to be rebuilt before consumers can import them:

```bash
pnpm build:components
```

But changes to existing files don't require a rebuild, Very cool!

Changes to the styles.css `@imports` also require this package to be rebuilt:

```bash
pnpm build:styles
```

But style declarations such as tokens don't. Also very cool!
