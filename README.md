<div align="center">

# @teo-garcia/prettier-config-shared

**Shared Prettier configuration for consistent code formatting**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/@teo-garcia/prettier-config-shared?color=blue)](https://www.npmjs.com/package/@teo-garcia/prettier-config-shared)
[![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier&logoColor=black)](https://prettier.io)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates) ecosystem

</div>

---

## Features

| Setting | Value |
|---------|-------|
| **Semicolons** | No |
| **Quotes** | Single |
| **Tab Width** | 2 spaces |
| **Trailing Commas** | ES5 |
| **JSX Quotes** | Single |
| **Print Width** | 80 |

**File-specific rules:**
- Markdown: Always wrap prose
- Prisma: Proper `.prisma` file formatting
- YAML: No single quotes, 2-space indent
- JSON: No trailing commas

## Requirements

- Node.js 20+
- Prettier 3+

## Quick Start

```bash
# Install the package
pnpm add -D @teo-garcia/prettier-config-shared prettier
```

### Package.json (Recommended)

```json
{
  "prettier": "@teo-garcia/prettier-config-shared"
}
```

### Configuration File

```javascript
// prettier.config.js
import sharedConfig from '@teo-garcia/prettier-config-shared'

export default sharedConfig
```

## Extending

Override settings as needed:

```javascript
// prettier.config.js
import sharedConfig from '@teo-garcia/prettier-config-shared'

export default {
  ...sharedConfig,
  printWidth: 100,
  semi: true,
}
```

## Related Packages

| Package | Description |
|---------|-------------|
| [@teo-garcia/eslint-config-shared](https://github.com/teo-garcia/eslint-config-shared) | ESLint rules |
| [@teo-garcia/tsconfig-shared](https://github.com/teo-garcia/tsconfig-shared) | TypeScript settings |
| [@teo-garcia/vitest-config-shared](https://github.com/teo-garcia/vitest-config-shared) | Test configuration |

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
