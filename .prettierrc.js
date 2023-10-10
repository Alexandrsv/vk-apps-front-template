/** @type {import("prettier").Config} */
const config = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^[a-zA-Z](.*)$',
    '^@[a-zA-Z]+(.*)$',
    '^@[/]router(.*)$',
    '^@[/]context(.*)$',
    '^@[/]hooks(.*)$',
    '^@[/]components(.*)$',
    '^@[/](.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

export default config
