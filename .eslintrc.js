module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'xo',
    'xo/esnext',
    'xo/browser',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
  ],
  plugins: ['vue', 'gridsome', 'graphql'],
};
