import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
// import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default defineConfig([
    {
        ignores: ['dist', 'node_modules', 'build'],
    },

    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react: pluginReact,
            'react-hooks': reactHooks,
            // 'jsx-a11y': jsxA11y,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...pluginReact.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            // ...jsxA11y.configs.recommended.rules,

            'react/react-in-jsx-scope': 'off',
            // 'react/prop-types': 'off',
            // 'jsx-a11y/click-events-have-key-events': 'off',
            // 'jsx-a11y/no-static-element-interactions': 'off',
            // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    prettierConfig,
]);
