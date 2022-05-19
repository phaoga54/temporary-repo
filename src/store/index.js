import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger'
import userInfo from './reducers/userInfo-reducers';

const reducers = combineReducers({
  userInfo
}); 
 
const store = createStore(reducers,applyMiddleware(createLogger({}))); 
export default store;
