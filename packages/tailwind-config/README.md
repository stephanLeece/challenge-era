Collection of internal tailwind configurations.

Additionally, the `shared-styles.css` file includes theme tokens for branc colors that can be used by apps/packages which use this config. I don't love that these come from here rather than the ui package, but i would need to spend more time tweaking config to resolve this, after some unsuccessful timeboxed attempts. 

## How to use:

In your app/packages top level css file, add:
`@import "@repo/tailwind-config";`

In package.json > dev dependencies:
`"@repo/tailwind-config": "workspace:*",`
