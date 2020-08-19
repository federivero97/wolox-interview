module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "react-app", "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react", "prettier"
    ],
    "rules": {
        "semi" : "error",
        //"no-console": "warn",
        "no-eval": "error",
        "import/first": "error",
        "eqeqeq": "error"
    }
};
