import {reportsRef, database} from '../firebase'

export const submitReport = report => dispatch => {
	reportsRef.push().set(report)
}

export const FETCH_REPORTS_SUCCESS = 'FETCH_REPORTS_SUCCESS'
export const fetchReportsSuccess = reports => ({
	type: 'FETCH_REPORTS_SUCCESS',
	reports
})

export const fetchReports = () => dispatch => {
	reportsRef.on('value', snap => {
		dispatch(fetchReportsSuccess(snap.val()))
	})
}
