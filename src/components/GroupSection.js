import React from 'react'
import './GroupSection.css'
import Entry from './Entry'

export const GroupSection = props => {
	const {reports = [], section = ''} = props
	const renderReports = reports => {
		return reports.map((report, index) => {
			return <Entry report={report} even={index % 2 ? true : false} key={index} />
		})
	}
	return (
		<main className="group-section-container">
			<header className="group-section-title">{section}</header>
			{renderReports(reports)}
		</main>
	)
}

export default GroupSection
