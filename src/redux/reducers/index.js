import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    alert: alertReducer,
    user: userReducer
});

export default reducer;