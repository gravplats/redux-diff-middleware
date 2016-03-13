import { applyMiddleware, combineReducers, createStore } from 'redux';

import diff from '../../modules/index';


const middleware = [
    diff()
];

const counter = (state = { value: 0 }, action = '') => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state.value + action.payload.value
            };

        default:
            return state;
    }
}

export default applyMiddleware(...middleware)(createStore)(combineReducers({ counter }));
