# Next.js App (`apps/next-js-app`)

This is the server-side rendered (SSR) application in the monorepo.

It is built with Next.js and consumes shared packages for UI components and data fetching.

---

## What this app does

- Renders user profile data fetched from a remote API
- Demonstrates server-side rendering (SSR)
- Uses shared UI components from the `ui` package
- Uses `profile-service` for data fetching and type-safe API access

This app focuses on SEO-friendly rendering and fast initial page loads.

---

## Shared architecture

This app is part of a monorepo and depends on shared packages:

- `ui` → shared component library
- `profile-service` → API/data layer
- shared ESLint / TypeScript / Tailwind configs

See the README in the monorepo root for more details.
---

## Getting started

Install dependencies (from the root of the monorepo):

```bash
pnpm install
```

Run the app (from within the next-js-app folder):

```bash
pnpm dev
```

Alternatively, from the monorepo root:
```bash
pnpm --filter next-js-app dev
```

Then go to http://localhost:3001/profiles/msescortplus 
