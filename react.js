// @ts-check
/* eslint-env node */

const { ESLINT_PATH_BABELCONFIG } = process.env;

if (!ESLINT_PATH_BABELCONFIG || typeof ESLINT_PATH_BABELCONFIG !== "string") {
    throw new Error("Cannot use this eslint config file with process.env.ESLINT_PATH_BABELCONFIG set");
}

/** @type {import("eslint").Linter.Config} */
const reactEslintConfig = {
    env: {
        "shared-node-browser": true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        babelOptions: {
            configFile: ESLINT_PATH_BABELCONFIG,
        },
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
