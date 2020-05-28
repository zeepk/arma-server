import {
	GET_LEADS,
	DELETE_LEAD,
	ADD_LEAD,
	LOGOUT_SUCCESS,
	GET_PATCHNOTES,
} from '../actions/types.js';

const initialState = {
	someText: 'sample text from lead reducer',
	arma: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_LEADS:
			return {
				...state,
				arma: action.payload,
			};
		case GET_PATCHNOTES:
			return {
				...state,
				patchnotes: action.payload,
			};
		case DELETE_LEAD:
			return {
				...state,
				// the id is being sent as the payload
				arma: state.arma.filter((lead) => lead.id !== action.payload),
			};
		case ADD_LEAD:
			return {
				...state,
				arma: [...state.arma, action.payload],
			};
		case LOGOUT_SUCCESS:
			return {
				...state,

				arma: [],
			};
		default:
			return state;
	}
}
