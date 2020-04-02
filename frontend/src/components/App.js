import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import RouterComponent from './layout/RouterComponent';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

import 'primereact/resources/themes/luna-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

// Alert options

const alertOptions = {
	timeout: 3000,
	position: 'top center'
};

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<RouterComponent />
				</AlertProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
