import {createStore, combineReducers} from 'redux';
import {mainReducer} from './Reducer';
import {mainReducer1} from './Reducer2';

export const reducer = combineReducers({
  mainReducer: mainReducer,
  mainReducer1: mainReducer1,
});

export const store = createStore(reducer);