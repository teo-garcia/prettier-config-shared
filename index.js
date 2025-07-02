const config = {
  // Core formatting rules
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  useTabs: false,

  // JSX specific
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,

  // Other languages
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "always",
        printWidth: 80,
      },
    },
    {
      files: "*.{yml,yaml}",
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
    {
      files: "*.json",
      options: {
        tabWidth: 2,
        trailingComma: "none",
      },
    },
  ],
};

export default config;
