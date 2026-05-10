# React SPA (`apps/react-spa`)

This is the client-side rendered (CSR) application in the monorepo, built with React and Vite.

It mirrors the Next.js application in looks and functionality.

---

## What this app does

- Displays user profile data fetched from a remote API
- Uses shared UI components from the `ui` package
- Uses `profile-service` for all data fetching and typing

---

## Shared architecture

This app is part of a monorepo and depends on shared packages:

- `ui` → shared component library
- `profile-service` → API/data layer
- shared ESLint / TypeScript / Tailwind configs

See the README in the monorepo root for more details.
---

## CORS handling

The remote API used for profile data does not support direct browser requests due to CORS restrictions.

To work around this, the app uses a **configurable proxy base URL**.

This allows API requests to be routed through a proxy during development.

---

## Environment variables

You must create a `.env` file in this app directory:

```bash
VITE_API_BASE_URL=<your-proxy-url>
```

This value is consumed by profile-service when constructing API requests.

Without this variable, profile data will not load in the SPA.

You can choose whichever value you want, i went with "/hunqz". i went with an env variable rather than hardcoding, as it is used in 2 different places (within a component, and within vite config), so it's a bit safer rather than having to change it in multiple places

## Getting started

Install dependencies (from the root of the monorepo):

```bash
pnpm install
```

Run the app. Either:

From within the react-spa folder
```bash
pnpm dev
```

Alternatively, from the monorepo root
```bash
pnpm --filter react-spa dev
```

Then go to `http://localhost:5173/profiles/msescortplus`
