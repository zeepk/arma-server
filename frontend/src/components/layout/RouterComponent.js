import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
	Redirect,
} from 'react-router-dom';
import Header from './Header';
import Dashboard from '../leads/Dashboard';
import StoreFront from '../leads/StoreFront';
import Updates from '../leads/Updates';
import Alerts from './Alerts';

class RouterComponent extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Alerts />
				<div style={{ width: '100%' }}>
					<Switch>
						{/* <PrivateRoute exact path="/" component={Dashboard} />
									<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} /> */}
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/store" component={StoreFront} />
						<Route path="/updates" component={Updates} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default withRouter(RouterComponent);
