import React, { Component } from 'react'
import { Link, withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import '../styles/header.css'
export class Header extends Component {
	static propTypes = {
		auth: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired,
	}

	render() {
		// const { isAuthenticated, user } = this.props.auth;
		// const authLinks = (
		// 	<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
		// 		<span className="navbar-text mr-3">
		// 			<strong>{user ? `Welcome ${user.username}` : ''}</strong>
		// 		</span>
		// 		<li className="nav-item">
		// 			<button
		// 				onClick={this.props.logout}
		// 				className="nav-link btn btn-info btn-sm text-light"
		// 			>
		// 				Logout
		// 			</button>
		// 		</li>
		// 	</ul>
		// );
		// const guestLinks = (
		// 	<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
		// 		<li className="nav-item">
		// 			<Link to="/register" className="nav-link">
		// 				Register
		// 			</Link>
		// 		</li>
		// 		<li className="nav-item">
		// 			<Link to="/login" className="nav-link">
		// 				Login
		// 			</Link>
		// 		</li>
		// 	</ul>
		// );

		return (
			<div className="header-container">
				{/* <img
					className="header-logo-visible"
					src="/static/AORemodelIconGold.png"
				/> */}
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-2 pb-2 pt-2">
					<div className="container ">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarTogglerDemo01"
							aria-controls="navbarTogglerDemo01"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon mr-0"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
							<ul className="navbar-nav mt-2 mt-lg-0">
								<li className="nav-item">
									<a className="nav-link pr-5 pl-5 m-auto" href="/">
										HOME
									</a>
								</li>
								<li className="nav-item">
									<Link to="/store" className="nav-link pr-5 pl-5 m-auto">
										STORE
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link pr-5 pl-5 m-auto" href="">
										FORUMS
									</a>
								</li>
								<li className="nav-item logo-link">
									<a className="" href="/">
										<img
											className="header-logo-visible"
											src="/static/AORemodelIconGold.png"
										/>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link pr-5 pl-5 m-auto" href="">
										SUPPORT
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link pr-5 pl-5 m-auto" href="/updates">
										UPDATES
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link pr-5 pl-5 m-auto" href="/admin/">
										LOG IN
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Header)
