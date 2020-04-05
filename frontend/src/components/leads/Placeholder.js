import React, { Component, Fragment } from 'react';
import '../styles/images.css';
export class Placeholder extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<div className="placeholder-img-container">
						<div className="placeholder-tag">{this.props.tag}</div>
						<img
							className="placeholder-image"
							src={`/static/${this.props.image_title}.jpg`}
						/>
					</div>
				</Fragment>
			</div>
		);
	}
}

export default Placeholder;
