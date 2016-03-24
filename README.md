# redux-diff-middleware

> Redux diff logger middelware

[![npm version](https://img.shields.io/npm/v/redux-diff-middleware.svg?style=flat-square)](https://www.npmjs.com/package/redux-diff-middleware)

## Install

```
npm install --save redux-diff-middleware
```

## Usage

Add as middleware:

```js
import { applyMiddleware, createStore } from 'redux';
import diff from 'redux-diff-middleware';
import reducers from './reducers';

const middleware = [
    diff()
];

const store = applyMiddleware(...middleware)(createStore)(reducers);
```

## License

MIT
