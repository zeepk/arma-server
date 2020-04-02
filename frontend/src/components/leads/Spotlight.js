import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import '../styles/images.css';

export class Spotlight extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<div className="imgContainer">
						<div className="tag">Spotlight</div>
						<img className="spotlight-image" src="/static/tutorials.jpg" />
					</div>
				</Fragment>
			</div>
		);
	}
}

export default Spotlight;
