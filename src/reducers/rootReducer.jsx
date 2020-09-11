import { combineReducers } from 'redux';
import userReducer from './userReducer';
import worksReducer from './worksReducer';

export default combineReducers({ 
    user: userReducer, works: worksReducer
});