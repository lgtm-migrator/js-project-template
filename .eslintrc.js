module.exports = {
    root: true,
    plugins: [],
    parserOptions: {
        "ecmaVersion": 6
    },
    extends: [
        'eslint:recommended',
    ],
    env: {
        "node": true,
        "es6": true,
        "jest": true
    },
    rules: {
        "semi": [2], // must end with semi
        "no-extra-semi": [0],
        "no-var": [2]
    }
};