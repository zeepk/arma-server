import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';

export class PatchNotesTeaser extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Card title="Patch Notes Teasers" style={{ fontSize: '20px' }}>
						<Card title="Hotfix 2.1.1" style={{ width: '95%' }}>
							<ul>
								<li>
									Changed x to do y when z is less than w Changed x to do y when
									z is less than w Changed x to do y when z is less than w
								</li>
								<li>
									Changed x to do y when z is less than w Changed x to do y when
									z is less than w Changed x to do y when z is less than w
								</li>
								<li>
									Changed x to do y when z is less than w Changed x to do y when
									z is less than w Changed x to do y when z is less than w
								</li>
							</ul>
						</Card>
						<br />
						<Card title="Release 2.1.0" style={{ width: '95%' }}>
							<ul>
								<li>
									Changed x to do y when z is less than w Changed x to do y when
									z is less than w Changed x to do y when z is less than w
								</li>
								<li>
									Changed x to do y when z is less than w Changed x to do y when
									z is less than w Changed x to do y when z is less than w
								</li>
								<li>
									Changed x to do y when z is less than w Changed x to do y when
									z is less than w Changed x to do y when z is less than w
								</li>
							</ul>
						</Card>
					</Card>
				</Fragment>
			</div>
		);
	}
}

export default PatchNotesTeaser;
