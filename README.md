# @teo-garcia/prettier-config-shared

Shared Prettier configuration for consistent code formatting across projects.

## Installation

```bash
npm install --save-dev @teo-garcia/prettier-config-shared prettier
```

## Usage

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

### Extend and Override

```javascript
// prettier.config.js
import sharedConfig from '@teo-garcia/prettier-config-shared'

export default {
  ...sharedConfig,
  printWidth: 100
}
```

## Configuration

- **Core rules**: No semi-colons, single quotes, 2-space tabs, ES5 trailing commas
- **JSX**: Single quotes for JSX attributes
- **Markdown**: Always wrap prose, 80 character width
- **Prisma**: Proper formatting for `.prisma` files
- **YAML**: No single quotes, 2-space indentation
- **JSON**: No trailing commas, 2-space indentation

## License

MIT
