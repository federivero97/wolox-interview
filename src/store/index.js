import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import techs from './reducers/techs';
import auth from './reducers/auth';

export function initStore() {
    const reducers = combineReducers({
        techs,
        auth
    });
  
    const store = createStore(reducers, applyMiddleware(thunk));

    return store;
} 