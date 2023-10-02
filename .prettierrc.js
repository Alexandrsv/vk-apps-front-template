/** @type {import("prettier").Config} */
const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^[a-z]', '^@(.*)$', '^[.]/components', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

export default config
