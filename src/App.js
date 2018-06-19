import React, {Component} from 'react'
import Header from './components/Header'
import GroupSection from './components/GroupSection'
import ReportForm from './components/ReportForm'
import './App.css'
import {fetchReports} from './actions/index'
import {connect} from 'react-redux'
import _ from 'lodash'
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}
	handleClose = () => {
		this.setState({
			open: false
		})
	}

	renderGroup = reports => {
		const category = {}
		reports.forEach(report => {
			category[report.category] ? '' : (category[report.category] = [])
			category[report.category].push(report)
		})
		const page = []
		_.forEach(category, (reports, section) => {
			page.push(<GroupSection section={section} reports={reports} key={section} />)
		})
		return page
	}

	componentDidMount() {
		this.props.fetchReports()
	}

	render() {
		this.renderGroup(this.props.reports)
		return (
			<div className="App">
				<Header />
				{this.renderGroup(this.props.reports)}
				<ReportForm open={this.state.open} onClose={this.handleClose} />
				<button className="open-form-btn" onClick={() => this.setState({open: true})}>
					Make new report
				</button>
			</div>
		)
	}
}
const mapStateToProps = state => {
	const reports = _.map(state.reports, report => report)
	return {
		reports: reports
	}
}
export default connect(
	mapStateToProps,
	{fetchReports}
)(App)
