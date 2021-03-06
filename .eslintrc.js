module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'no-unused-vars': 0,
    'no-tabs': 0,
    'generator-star-spacing': 0,
    'no-irregular-whitespace': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
