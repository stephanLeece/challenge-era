# `@turbo/typescript-config`

Collection of internal tsconfig configurations.

### How to use this package:

Add this line to your app/package's tsconfig.json:

`"extends": "@repo/typescript-config/[config type]",`

There are config options for next, react-librarys and base configurations

Note: The configuration from the base file are loaded first, then overridden by those in the inheriting config file. All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.

In package.json > dev dependencies:
`"@repo/typescript-config": "workspace:*",`