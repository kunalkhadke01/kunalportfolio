import { combineReducers } from 'redux';
import DataReducer from './reducer';

const allData = combineReducers({
    usersList: DataReducer
})

export default allData;