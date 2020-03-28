import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import '../styles/images.css';

export class Spotlight extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Card title="Spotlight" style={{ fontSize: '20px', height: '50%' }}>
						<img className="spotlight-image" src="/static/spotlight.jpg" />
					</Card>
				</Fragment>
			</div>
		);
	}
}

export default Spotlight;
