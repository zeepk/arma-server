import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';

export class Spotlight extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Card
						title="Spotlight"
						style={{ fontSize: '20px', height: '50%' }}
					></Card>
				</Fragment>
			</div>
		);
	}
}

export default Spotlight;
