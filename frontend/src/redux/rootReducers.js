import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import auth from './reducers/auth';

export default combineReducers({
    forms: formReducer,
    auth,
    routing,
});