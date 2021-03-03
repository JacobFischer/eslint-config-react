// @ts-check
/* eslint-env node */

const { ESLINT_PATH_BABELCONFIG } = process.env;

if (!ESLINT_PATH_BABELCONFIG || typeof ESLINT_PATH_BABELCONFIG !== "string") {
    throw new Error("Cannot use this eslint config file with process.env.ESLINT_PATH_BABELCONFIG set");
}

/** @type {import("eslint").Linter.Config} */
const reactEslintConfig = {
    extends: [
        "plugin:react/recommended",
    ],
    env: {
        es6: true,
        "shared-node-browser": true,
    },
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
    ],
    rules: {
        // -- React -- \\
        // TypeScript handles props' types at build time, instead of runtime
        "react/prop-types": "off",
        // Babel plugin now injects display name
        "react/display-name": "off",
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
