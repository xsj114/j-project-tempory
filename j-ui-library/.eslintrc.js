module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
    },
    'extends': [
        'plugin:vue/vue3-recommended',
        'google',
    ],
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'requireConfigFile': false,
        'ecmaFeatures': {
            'jsx': true,
        },
        'parser': '@babel/eslint-parser',
    },
    'plugins': [
        'vue',
    ],
    'rules': {
        'space-in-parens': [ 'error', 'always' ],
        'indent': [ 'error', 4 ],
        'block-spacing': [ 'error', 'always' ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'semi-spacing': [ 'error', { 'before': false, 'after': true } ],
        'space-infix-ops': [ 'error', { 'int32Hint': false } ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'max-len': [ 'off' ],
        'computed-property-spacing': [ 'error', 'always' ],
        'require-jsdoc': [ 'off' ],
        'no-invalid-this': [ 'off' ],
        'prefer-rest-params': [ 'off' ],
        'prefer-spread': [ 'off' ],
        'vue/html-indent': [ 'error', 4, {
            'attribute': 1,
        } ],
    },
};
