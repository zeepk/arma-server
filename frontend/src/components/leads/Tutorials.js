import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import '../styles/images.css';

export class Tutorials extends Component {
	render() {
		return (
			<div className="imgContainer">
				<div className="tag">Tutorials</div>
				<img className="tut-image" src="/static/tutorials.jpg" />
			</div>
		);
	}
}

export default Tutorials;
