import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import {loginReducer} from '../modules/components/Login/redux/reducer';

export default (history) => combineReducers({
    LOGIN: loginReducer,
    router: connectRouter(history),
    form: formReducer,
});
