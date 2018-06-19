import React from 'react'
import './ReportForm.css'
import Dialog from '@material-ui/core/Dialog'
import {submitReport} from '../actions/index'
import {connect} from 'react-redux'
import moment from 'moment'
import uuid from 'uuid/v5'
export class ReportForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}
	}

	handleCheckBox = e => {
		this.checkbox = e.target.checked
	}
	handleClose = () => {
		this.props.onClose()
	}
	handleSubmit = e => {
		e.preventDefault()
		const category = this.categoryRef ? this.categoryRef.value : ''
		const busNumber = this.busNumberRef ? this.busNumberRef.value : ''
		const date = this.dateRef ? this.dateRef.value : moment().format('YYYY-MM-DD')
		const reason = this.reasonRef ? this.reasonRef.value : ''
		const description = this.descriptionRef ? this.descriptionRef.value : ''
		const noParts = this.checkbox ? true : false
		// error tolerance on busNumber and reason
		if (!busNumber) {
			return this.busNumberRef.focus()
		}
		if (!reason) {
			return this.reasonRef.focus()
		}
		this.props.dispatch(
			submitReport({id: uuid.URL, category, busNumber, date: date, reason, description, noParts})
		)
		this.handleClose()
	}
	render() {
		const {onClose, ...other} = this.props
		return (
			<Dialog onClose={this.handleClose} aria-labelledby="report" {...other}>
				<form className="report-form" onSubmit={this.handleSubmit}>
					<a className="report-close" onClick={this.handleClose}>
						X
					</a>
					<div className="form-entry category">
						<label htmlFor="category">Category</label>
						<select
							name="category"
							id="category"
							defaultValue="SMA-HOLD BUSES"
							ref={ref => (this.categoryRef = ref)}
						>
							<option value="SMA-HOLD BUSES">SMA-HOLD BUSES</option>
							<option value="EXPRESS">EXPRESS</option>
							<option value="ACCIDENTS">ACCIDENTS</option>
							<option value="WARRANTY">WARRANTY</option>
							<option value="OFF PROPERTY">OFF PROPERTY</option>
							<option value="BTR-HOLD BUSES">BTR-HOLD BUSES</option>
						</select>
					</div>
					<div className="form-entry">
						<label htmlFor="bus-number">Bus number</label>
						<input
							name="bus-number"
							id="bus-number"
							type="text"
							placeholder="bus number"
							ref={ref => (this.busNumberRef = ref)}
						/>
					</div>
					<div className="form-entry">
						<label htmlFor="date">Date</label>
						<input
							name="date"
							id="date"
							type="date"
							defaultValue={moment().format('YYYY-MM-DD')}
							ref={ref => (this.dateRef = ref)}
						/>
					</div>
					<div className="form-entry">
						<label htmlFor="reason">Reason Down</label>
						<input
							name="reason"
							id="bus-reason"
							type="text"
							placeholder="TL;DR"
							ref={ref => (this.reasonRef = ref)}
						/>
					</div>
					<div className="form-entry">
						<label htmlFor="description">Description</label>
						<textarea
							name="description"
							id="description"
							type="text"
							placeholder="..."
							ref={ref => (this.descriptionRef = ref)}
						/>
					</div>
					<div className="no-parts">
						<label htmlFor="no-parts">No parts</label>
						<input name="no-parts" id="no-parts" type="checkbox" onChange={this.handleCheckBox} />
					</div>
					<div className="form-entry">
						<button type="submit">Send</button>
					</div>
				</form>
			</Dialog>
		)
	}
}

export default connect()(ReportForm)
