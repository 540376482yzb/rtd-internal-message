import React from 'react'
import './responsive.css'
import './Entry.css'
export const Entry = ({even, report}) => {
	return (
		<main className={`entry-container ${even ? 'even' : ''}`}>
			<div className="bus">{report.busNumber}</div>
			<div className="date">{report.date}</div>
			<div className="reason">{report.reason}</div>
			<div className="no-part">{report.noParts ? 'X' : ''}</div>
			<div className="description">{report.description}</div>
		</main>
	)
}

export default Entry
