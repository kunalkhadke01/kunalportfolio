import { combineReducers } from 'redux';
import user from './reducer';

const allData = combineReducers({
    usersList: user
})

export default allData;