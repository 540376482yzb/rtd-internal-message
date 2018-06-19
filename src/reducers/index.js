import {FETCH_REPORTS_SUCCESS} from '../actions'
const initialState = {
	reports: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_REPORTS_SUCCESS:
			return {...state, reports: action.reports}
		default:
			return state
	}
}
