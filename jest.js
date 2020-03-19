// @ts-check

/** @type {import("eslint").Linter.Config} */
const jestEslintConfig = {
    env: {
        jest: true,
        "jest/globals": true,
    },
    extends: [
        "./node.js",
        "plugin:jest/recommended",
    ],
    plugins: [
        "jest",
    ],
};

module.exports = jestEslintConfig;
