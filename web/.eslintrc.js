module.exports = {
  extends: [
    'next',
    "next/babel",
    'standard',
    'standard-react',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    "next/core-web-vitals",
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': 0,
    '@next/next/no-img-element': 0,
  },
}
