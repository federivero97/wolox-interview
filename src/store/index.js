import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import techs from './reducers/techs';

export function initStore() {
    const reducers = combineReducers({
        techs
    })
  
    const store = createStore(reducers, applyMiddleware(thunk));

    return store;
} 