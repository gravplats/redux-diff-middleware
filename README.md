# redux-diff-middleware

> Redux diff logger middelware

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
