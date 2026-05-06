import { execFileSync } from 'node:child_process'
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
)
const packageJson = JSON.parse(
  readFileSync(path.join(packageRoot, 'package.json'), 'utf8')
)
const tempRoot = mkdtempSync(path.join(tmpdir(), 'teo-prettier-consumer-'))
const tarballDir = path.join(tempRoot, 'tarballs')
const consumerDir = path.join(tempRoot, 'consumer')

mkdirSync(tarballDir)
mkdirSync(consumerDir)

execFileSync('pnpm', ['pack', '--pack-destination', tarballDir], {
  cwd: packageRoot,
  stdio: 'inherit',
})

const tarballName = readdirSync(tarballDir).find((file) =>
  file.endsWith('.tgz')
)

if (!tarballName) {
  throw new Error('pnpm pack did not create a tarball')
}

writeFileSync(
  path.join(consumerDir, 'package.json'),
  `${JSON.stringify(
    {
      private: true,
      type: 'module',
      prettier: packageJson.name,
      dependencies: {
        [packageJson.name]: `file:${path.join(tarballDir, tarballName)}`,
        ...packageJson.peerDependencies,
      },
    },
    null,
    2
  )}\n`
)

writeFileSync(
  path.join(consumerDir, 'sample.js'),
  'const value = { ok: true }\nconsole.log(value)\n'
)

execFileSync('pnpm', ['install', '--ignore-scripts'], {
  cwd: consumerDir,
  stdio: 'inherit',
})

const config = (await import(packageJson.name)).default

if (config.semi !== false || config.singleQuote !== true) {
  throw new Error('unexpected prettier config export')
}

execFileSync('pnpm', ['exec', 'prettier', '--check', 'sample.js'], {
  cwd: consumerDir,
  stdio: 'inherit',
})

console.log('prettier packed consumer smoke ok')
