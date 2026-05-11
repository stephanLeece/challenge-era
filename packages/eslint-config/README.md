# `@turbo/eslint-config`

Collection of internal eslint configurations.

### How to use this package:

In your app/packages' esline.config.js:

```
import { configType } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default configType;
```

Where configType is your desired config (base, nextjs, react-internal) 


In package.json > dev dependencies:
`"@repo/eslint-config": "workspace:*",`