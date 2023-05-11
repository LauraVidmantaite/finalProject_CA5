module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'import/prefer-default-export': ['off'],
    'react/prop-types': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'react/jsx-props-no-spreading': ['react/jsx-props-no-spreading']
  },
};
