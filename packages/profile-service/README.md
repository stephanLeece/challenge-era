# `profile-service`

This package is responsible for fetching user profile data from a remote server.

---

## What this package does

- Fetches user profile data from a remote endpoint
- Provides a typed interface for consuming profile data
- Exposes TypeScript types for profile data used across the monorepo
- Encapsulates API access and error handling logic
- Handles configurable API base URLs

---

## Why this exists

Without this package, each application would need to:

- Reimplement fetch logic
- Handle API errors independently
- Construct API URLs separately
- Duplicate type definitions

---

## Core behaviour

The main export is `getProfile`, which:

- Accepts a profile `name`
- Optionally accepts a `baseUrl`
- Defaults to the production API if no base URL is provided

---

## Error handling

The service handles API responses explicitly:

- `404` → treated as “Profile not found”
- Other non-OK responses → throw a generic error with the HTTP status code

This ensures consuming applications can handle expected failure states in a consistent way.

A future improvement could be to expose user-friendly error messages, which could be used by the two apps to avoid duplication. However, this may be out of scope for the current implementation (or not really make sense for a package which handles data fetching to also handle copy/localisation).

---

## Types

The exposed types are inferred from the API response.

I expect there is "official" type definitions for the endpoint, but i don't have access them. As a result, the types here are based on the observed response shape and may not be fully accurate.

They are used to provide a consistent interface across the monorepo, but should be treated as best-effort rather than strict contracts.

--

## Tests

This package uses **Vitest** for unit testing.

Vitest was chosen because it is lightweight, fast, and does not require Vite to be used alongside it. It is also largely compatible with the Jest ecosystem, which makes it easy to work with if you're already familiar with Jest.

Tests focus on:
- API response handling
- Error handling logic
- Data fetching behaviour

tests are in their own folder outside of src. For packages with alot of files to test, colocation can make folder navigation easier. Of course it depends on the preffered 'house style' as well. Here i went with a seperate folder so it's clear at first glance where the tests are.

### Running tests
```bash
pnpm test
```

### How to use

In package.json > dependencies:
`"@repo/profile-service": "workspace:*",`

Then you can import where needed:
```
import { getProfile } from "@repo/profile-service";
```