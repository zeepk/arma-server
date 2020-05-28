import { combineReducers } from 'redux';
import arma from './arma';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
	arma,
	errors,
	messages,
	auth,
});
