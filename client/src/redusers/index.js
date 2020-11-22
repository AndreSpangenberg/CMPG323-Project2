import { combineReducers} from 'redux';
import errorReducer from './errorReduser';
import authReduser from './authReduser';

export default combineReducers({
    item: errorReducer,
    item: authReduser
});