const path = require( 'path' );

module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
    },
    'extends': [
        'plugin:vue/vue3-recommended',
        'google',
        path.resolve( __dirname, '../../.eslintrc.js' ),
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
        'vue/html-indent': [ 'error', 4, {
            'attribute': 1,
        } ],
    },
};
