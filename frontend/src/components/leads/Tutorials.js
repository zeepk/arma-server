import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import logo from '../../images/spotlight.jpg'; // with import

export class Tutorials extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Card title="Tutorials" style={{ fontSize: '20px', height: '50%' }}>
						<img src={logo} />
					</Card>
				</Fragment>
			</div>
		);
	}
}

export default Tutorials;
