import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
	Redirect
} from 'react-router-dom';
import Header from './Header';
import Dashboard from '../leads/Dashboard';
import Alerts from './Alerts';

class RouterComponent extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Alerts />
				<div style={{ padding: '10px 10px 0 10px', width: '100%' }}>
					<Switch>
						{/* <PrivateRoute exact path="/" component={Dashboard} />
									<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} /> */}
						<Route exact path="/" component={Dashboard} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default withRouter(RouterComponent);
