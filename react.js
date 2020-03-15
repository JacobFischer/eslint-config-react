// @ts-check
/* eslint-env node */

/** @type {import("eslint").Linter.Config} */
const reactEslintConfig = {
    env: {
        "shared-node-browser": true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "eslint-plugin-import-order-alphabetical",
        "jsdoc",
    ],
    extends: [
        "./index.js",
        "plugin:react/recommended",
        "prettier/babel",
        "prettier/react",
    ],
    rules: {
        // React
        "react/prop-types": "off", // TypeScript handles props' types at build time, much better than runtime.
        "react/display-name": "off", // Babel plugin now injects display name
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
    },
};

module.exports = reactEslintConfig;
