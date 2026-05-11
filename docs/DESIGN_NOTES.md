Design Notes -- Monorepo Code Challenge
======================================

This document captures the thinking, decisions, trade-offs, and development process behind this monorepo implementation.

It is intended to complement the codebase by explaining why things were built the way they were.

* * * * *

1\. Challenge requirements
--------------------------

The goal was to build a monorepo containing:

-   A Next.js app (SSR, SEO-friendly)

-   A React SPA (CSR, Vite-based)

-   A shared module for fetching user profile data from a remote API

Both applications needed to:

-   Use TypeScript for type safety

-   Use Tailwind CSS for styling

-   Display fetched profile images

-   Share a common data layer and UI components

Additional constraints:

-   Fetch profile data from a fixed API endpoint

-   Handle CORS restrictions

-   Include minimal unit tests for shared logic

-   Ensure Next.js app is SEO friendly

* * * * *

2\. How I broke the work down
-----------------------------

I started by focusing on getting the system working end-to-end before worrying about polish or architecture refinement.

The approach was roughly:

### Step 1 -- Get a working monorepo

-   Start from a Turborepo template

-   Ensure apps can run independently

-   Confirm shared packages can be imported correctly

### Step 2 -- Get data flowing

-   Build a shared profile-service

-   Fetch real API data

-   Handle errors and types in one place

### Step 3 -- Shared UI layer

-   Add a reusable UI package

-   Avoid duplicating components between apps

-   Standardise styling across both apps

### Step 4 -- Make it production-like

-   Add routing

-   Handle loading + error states

-   Add basic tests (Vitest)

-   Fix CORS via proxy setup

### Step 5 -- Polish

-   Tailwind fixes across packages

-   UI refinements (grid, loading states)

-   Lighthouse audits

-   Small refactors and cleanup

The key idea was: get it working first, then improve structure once the system exists.

* * * * *

3\. Tech choices
----------------

### Monorepo tooling

I considered:

-   Turborepo

-   Nx

-   Lerna

All are valid, but I chose Turborepo because:

-   I already had some familiarity with it

-   Fast setup and good developer experience

-   Easy to run multiple apps and shared packages

-   Well supported and widely used

In a real production setup, the decision would depend on team standards, scale, and long-term maintainability.

* * * * *

### Starter choice

I used the official Turborepo + Next.js starter from Vercel to avoid spending time on boilerplate and focus on architecture and implementation.

* * * * *

### Key architectural decisions

-   Shared UI package for reusable components

-   Shared profile-service for all API access and types

-   Centralised configuration for ESLint / TypeScript / Tailwind

-   Separation of SSR (Next.js) and CSR (React SPA)

The goal was to keep boundaries clean while still allowing reuse.

* * * * *

4\. Challenges
--------------

### 1\. CORS

The API does not allow direct browser access.

This was solved by introducing:

-   a configurable proxy base URL

-   environment-based configuration per app

This allowed both SSR and CSR apps to use the same data layer without duplication.

* * * * *

### 2\. Tailwind across a monorepo

One of the more time-consuming parts was getting Tailwind working consistently across:

-   Next.js app

-   React SPA

-   shared UI package

Issues included:

-   content scanning across workspace packages

-   style prefixing (ui:) to avoid collisions

-   build pipeline consistency

Once stable, it worked well, but the initial setup required iteration.

* * * * *

### 3\. Monorepo configuration complexity

Some friction came from aligning:

-   TypeScript configs across packages

-   ESLint module formats (.mjs)

-   Vite + Next.js differences in build expectations

Most of this was configuration alignment rather than logic issues.

* * * * *

### 4\. UI package build behaviour

A key learning point:

-   New components require a build step before being consumed

-   Existing components update without rebuild

-   Style pipeline changes require additional rebuild steps

This is fine in a controlled monorepo but is worth being aware of.

* * * * *

### 5\. Type handling

Types for API responses are inferred from the endpoint rather than formally defined.

This introduces some uncertainty, but was acceptable for the scope of the challenge.

* * * * *

6\. Lighthouse Audits
---------------------

Next.js\
React

Room for improvement maybe. It looks like the hunqz endpoint doesn't accept height/width params for images otherwise I would try requesting at a smaller size.

* * * * *

7\. Improvements / Iterations
-----------------------------

The challenge took me around 8--9 hours in total.

There are of course things that could be improved or expanded on, but there comes a point with timeboxed work where you have to find an appropriate stopping point.

If I had more time, I would look into:

-   Add React Query for caching and request state management

-   Improve error messaging consistency across apps

-   Add runtime schema validation for API responses

-   Improve component test coverage (UI layer)

-   Have design tokens within the ui package (rather than the current mixed approach)