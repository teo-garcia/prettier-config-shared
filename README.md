# @teo-garcia/prettier-config-shared

Shared Prettier configuration used across the fullstack web templates.

## Install

```sh
# with pnpm
pnpm add -D @teo-garcia/prettier-config-shared prettier

# or with npm
npm add -D @teo-garcia/prettier-config-shared prettier
```

## Usage

### Option 1: Package.json (Recommended)

```json
{
  "prettier": "@teo-garcia/prettier-config-shared"
}
```

### Option 2: Configuration file

```js
// prettier.config.js
import sharedConfig from "@teo-garcia/prettier-config-shared";

export default sharedConfig;
```

### Option 3: Extend and override

```js
// prettier.config.js
import sharedConfig from "@teo-garcia/prettier-config-shared";

export default {
  ...sharedConfig,
  // Your project-specific overrides
  printWidth: 100,
};
```

## Configuration

This config includes:

- **Core rules**: Semi-colons disabled, single quotes, 2-space tabs, ES5 trailing commas
- **JSX rules**: Single quotes for JSX attributes
- **Markdown**: Always wrap prose, 80 character width
- **Prisma**: Proper formatting for `.prisma` files
- **YAML**: No single quotes, 2-space indentation
- **JSON**: No trailing commas, 2-space indentation

---

### Notes

- Compatible with Prettier 3.x
- Designed to work seamlessly with `@teo-garcia/eslint-config-shared`
- All file type overrides are included for consistent formatting across the monorepo
