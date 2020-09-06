import { combineReducers } from 'redux';
import DataReducer from './reducers-users';

const allData = combineReducers({
    usersList: DataReducer
})

export default allData;