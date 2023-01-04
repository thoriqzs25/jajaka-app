module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'prettier/prettier': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react-native/no-inline-styles': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'src/types', 'src/components', 'src/utils', 'src/screens', 'src/assets'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
