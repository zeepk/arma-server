import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import '../styles/images.css';

export class Tutorials extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Card title="Tutorials" style={{ fontSize: '20px', height: '50%' }}>
						<img className="tut-image" src="/static/tutorials.jpg" />
					</Card>
				</Fragment>
			</div>
		);
	}
}

export default Tutorials;
