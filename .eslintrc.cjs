module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    settings: { react: { version: 'detect' } },
    rules: {
        semi: ['error', 'never'],
        'max-len': ['error', { code: 120 }],
        'react/react-in-jsx-scope': 'off'
    }
}