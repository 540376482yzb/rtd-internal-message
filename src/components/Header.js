import React from 'react'
import './Header.css'
import './responsive.css'
export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.handleScroll = this.handleScroll.bind(this)
		this.state = {
			stickTop: false
		}
	}
	handleScroll = e => {
		this.scrollPosition = e.currentTarget.pageYOffset
		if (!this.state.stickTop && this.scrollPosition > 200) {
			this.setState({stickTop: true})
		}
		if (this.state.stickTop && this.scrollPosition < 200) {
			this.setState({stickTop: false})
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}
	render() {
		return (
			<header className="header-container">
				<h3>PASSDOWN</h3>
				<hr />
				<section className={`header-title ${this.state.stickTop ? 'stickTop' : ''}`}>
					<div className="bus">Bus #</div>
					<div className="date">Date</div>
					<div className="reason">Reason Down</div>
					<div className="no-part">No Parts</div>
					<div className="description">Description</div>
				</section>
			</header>
		)
	}
}
